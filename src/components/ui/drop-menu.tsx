"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { House, User, LogOut } from "lucide-react";

interface CustomDropdownMenuProps {
  children: React.ReactNode;
  profileType: string;
  onProfileClick: (content: 'home' | 'notifications' | 'profile') => void;
}

export const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({ children, profileType, onProfileClick }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-card text-card-foreground rounded-md shadow-lg p-2 min-w-[200px] mx-4">
        <div className="p-6 flex flex-col items-center gap-2 text-muted-foreground border-2 rounded-lg">
          <User className="w-8 h-8 bg-foreground text-white rounded-full" />
          <span>{profileType}</span>
        </div>
        <DropdownMenu.Separator className="my-1 border-t border-border" />
        <DropdownMenu.Item className="p-2 hover:bg-muted hover:text-muted-foreground cursor-pointer flex items-center gap-2" onClick={() => onProfileClick('home')}>
          <House className="w-4 h-4" />
          Home
        </DropdownMenu.Item>
        <DropdownMenu.Item className="p-2 hover:bg-muted hover:text-muted-foreground cursor-pointer flex items-center gap-2" onClick={() => onProfileClick('profile')}>
          <User className="w-4 h-4" />
          Meu Perfil
        </DropdownMenu.Item>
        <DropdownMenu.Separator className="my-1 border-t border-border" />
        <DropdownMenu.Item className="p-2 hover:bg-destructive hover:text-destructive-foreground cursor-pointer text-destructive flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          Sair
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};