interface ProfileInfoProps {
  name: string;
  role: string;
}

export function ProfileInfo({ name, role }: ProfileInfoProps) {
  return (
    <div className="hidden lg:block text-left">
      <p className="text-sm font-bold text-gray-800 leading-none">{name}</p>
      <p className="text-[11px] text-gray-500 font-medium mt-1">{role}</p>
    </div>
  );
}
