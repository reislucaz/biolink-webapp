/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react'
import tailwindConfig from '../../tailwind.config'
import { cn } from '../lib/utils'



type StepsType = 'icon' | 'number' | undefined

type StepsContextType = {
  type: StepsType
  steps?: string[]
  value: string
  onChange?: (value: string) => void
}

type StepItemProps = {
  icon?: ReactNode
  name: string
  disabled?: boolean
  className?: string
  value: string
}

export interface StepsProps {
  className?: string
  type?: StepsType
  children: ReactElement<StepItemProps> | ReactElement<StepItemProps>[]
  value: string
  onChange?: (value: string) => void
}

const StepsContext = createContext<StepsContextType>({} as StepsContextType)

const StepsRoot = ({
  children,
  className,
  type,
  value,
  onChange,
}: StepsProps) => {
  const refRo = useRef<HTMLDivElement>(null)
  const refs = useRef<HTMLButtonElement[]>([])
  const ro = useRef<ResizeObserver | null>(null)
  const [locations, setLocations] = useState<number[]>([])
  const [current, setCurrent] = useState<string>(value)

  const steps = Children.map(children, (element) => {
    if (!isValidElement(element)) {
      return null
    }

    return element.props.value
  })

  function handleOnChange(value: string) {
    if (onChange) {
      onChange(value)
    } else {
      setCurrent(value)
    }
  }

  function updateLocations() {
    setLocations(
      refs.current.map((ref) => ref.offsetLeft + ref.offsetWidth / 2),
    )
  }

  useEffect(() => {
    if (value) {
      setCurrent(value)
    }
  }, [value])

  useEffect(() => {
    if (!window) {
      return
    }

    ro.current = new ResizeObserver(() => {
      updateLocations()
    })

    ro.current.observe(refRo?.current as HTMLElement)

    return () => {
      ro.current?.disconnect()
    }
  }, [refRo.current])

  const stepWidth = (locations.at(-1) ?? 0) - (locations.at(0) ?? 0)
  const stepProgress =
    (locations.at(steps.indexOf(current)) ?? 0) - (locations.at(0) ?? 0)

  const stepColor = tailwindConfig.theme.extend.colors.primary.DEFAULT
  const stepProgressColor = tailwindConfig.theme.extend.colors.background

  return (
    <StepsContext.Provider
      value={{ steps, type, value: current, onChange: handleOnChange }}
    >
      <div
        aria-current="step"
        className={cn(
          'relative flex flex-row items-center justify-around xl:px-20 [&>button:has(~_button[data-selected=true])_>_div_>_div]:bg-primary',
          className,
        )}
        ref={refRo}
      >
        <div
          className="absolute left-1/2 top-6 h-1 bg-primary"
          style={{
            transform: `translateX(-50%)`,
            width: stepWidth,
            background: `linear-gradient(to right, ${stepProgressColor}, ${stepProgressColor} ${stepProgress}px, ${stepColor} ${stepProgress}px, ${stepColor})`,
          }}
        />
        {Array.isArray(children)
          ? children.map((child, index) => {
              return cloneElement(child, {
                key: index,
                // @ts-ignore
                ref: (el: HTMLButtonElement) => {
                  refs.current[index] = el
                },
              })
            })
          : cloneElement(children, {
              // @ts-ignore
              ref: (el: HTMLButtonElement) => {
                refs.current[0] = el
              },
            })}
      </div>
    </StepsContext.Provider>
  )
}

const StepItem = forwardRef<HTMLButtonElement, StepItemProps>(
  ({ className, disabled, icon, name, value }, ref) => {
    const { steps, type, value: current, onChange } = useContext(StepsContext)

    const selected = current === value
    const index = steps!.findIndex((i) => i === value)
    let iconValue: string | number | ReactNode = null

    switch (type) {
      case 'icon':
        iconValue = icon
        break
      case 'number':
        iconValue = index + 1
        break
      default:
        iconValue = ''
        break
    }

    return (
      <button
        className={cn(
          'group relative flex size-20 flex-row items-center justify-center',
          selected && 'after:bg-secondary/70',
          className,
        )}
        data-selected={selected}
        disabled={disabled}
        key={name}
        onClick={() => onChange?.(value)}
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center gap-2 shadow-none">
          <div
            className={cn(
              'rounded-full p-2 text-background group-disabled:bg-gray400',
              type === 'number' && 'px-2 py-0',
              selected ? 'bg-primary' : 'bg-gray300',
            )}
          >
            {iconValue}
          </div>
          <p
            className={cn(
              'invisible whitespace-nowrap text-sm group-disabled:text-foreground/30 sm:visible',
              selected ? 'text-primary' : 'text-foreground/60',
              'font-medium',
            )}
            
          >
            {name}
          </p>
        </div>
      </button>
    )
  },
)

StepsRoot.displayName = 'StepsRoot'
StepItem.displayName = 'StepItem'

export const Steps = {
  Item: StepItem,
  Root: StepsRoot,
}
