import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  variant?: "default" | "surface" | "gray";
  width?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ variant = "default", width, children }) => {
  return (
    <div className={cn(
      "p-4 rounded-lg shadow-md",
      variant === "surface" ? "bg-card text-card-foreground" :
        variant === "gray" ? "bg-secondary shadow-sm text-muted-foreground" : "bg-white text-primary",
      width
    )}>
      {children}
    </div>
  );
};

export default Card;