import {
  ClipboardPen,
  CloudSunRain,
  HardHat
} from 'lucide-react'
import { RegisterStepsEnum, RegisterStepsType } from '../../constants/steps/register-steps-enum'
import { useRegisterStepsProvider } from '../../hooks/use-register-provider'
import { Steps } from '../../shared/steps'

type Props = {
  current: RegisterStepsType
  onClick: (value: RegisterStepsType) => void
}

type StepForm = {
  trigger: () => Promise<boolean> | boolean
}

type StepObject = {
  [key: string]: StepForm
}

export function ConstructionDiarySteps({ current, onClick }: Props) {
  const { EmergencialForm, MedicalOneForm, MedicalTwoForm, personalForm } =
    useRegisterStepsProvider()

  const steps: StepObject = {
    personal: personalForm,
    medicalOne: MedicalOneForm,
    medicalTwo: MedicalTwoForm,
    emergencial: EmergencialForm
  }

  async function handleOnClick(value: RegisterStepsType) {
    if (current == value) {
      return
    }

    const stepKeys = Object.fromEntries(
      Object.entries(steps).map(([key], index) => [key, index]),
    )

    if (stepKeys[value] > stepKeys[current]) {
      const toValidate = Object.keys(steps).slice(
        stepKeys[current],
        stepKeys[value],
      )

      for (const key of toValidate) {
        const valid = await steps[key].trigger()

        if (valid) {
          onClick(value)
        } else {
          onClick(key as RegisterStepsType)
          break
        }
      }

      return
    }

    onClick(value)
  }

  return (
    <Steps.Root
      onChange={(value) => handleOnClick(value)}
      type="icon"
      value={current}
    >
      <Steps.Item
        icon={<HardHat className="size-4" />}
        name={'Dados pessoais'}
        value={RegisterStepsEnum.PERSONAL}
      />
      <Steps.Item
        icon={<CloudSunRain className="size-4" />}
        name={'Informações médicas'}
        value={RegisterStepsEnum.MEDICAL_ONE}
      />
      <Steps.Item
        icon={<ClipboardPen className="size-4" />}
        name={'Informações médicas'}
        value={RegisterStepsEnum.MEDICAL_TWO}
      />
      <Steps.Item
        icon={<ClipboardPen className="size-4" />}
        name={'Contato de emergência'}
        value={RegisterStepsEnum.EMERGENCIAL}
      />
    </Steps.Root>
  )
}
