import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { AvatarStatus } from "../AvatarStatus";
import { ProfileInfo } from "../ProfileInfo";

interface ProfileButtonProps {
  name: string;
  role: string;
  avatarUrl?: string;
  isOpen?: boolean;
  isOnline?: boolean;
  onClick: () => void;
  rightIcon?: ReactNode;
}

export function ProfileButton({
  name,
  role,
  avatarUrl,
  isOpen = false,
  isOnline = true,
  onClick,
  rightIcon
}: ProfileButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-3
        p-1 pr-3 rounded-full
        border border-transparent
        hover:bg-gray-50 hover:border-gray-100
        transition-all cursor-pointer
      "
    >
      <AvatarStatus src={avatarUrl} isOnline={isOnline} />

      <ProfileInfo name={name} role={role} />

      {rightIcon ?? (
        <ChevronDown
          size={16}
          className={`
            text-gray-400 transition-transform
            hidden sm:block
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      )}
    </button>
  );
}
