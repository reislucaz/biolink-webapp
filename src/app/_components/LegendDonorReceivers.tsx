"use client";

export default function LegendDonorReceivers() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="inline-block w-4 h-4 bg-primary"></span>
        <span className="text-secondary-foreground font-medium">Doadores</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-block w-4 h-4 bg-foreground"></span>
        <span className="text-secondary-foreground font-medium">Receptores</span>
      </div>
    </div>
  );
}
