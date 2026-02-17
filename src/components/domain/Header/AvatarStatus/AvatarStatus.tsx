interface AvatarStatusProps {
  src?: string;
  alt?: string;
  isOnline?: boolean;
  size?: number;
}

export function AvatarStatus({
  src,
  alt = "Avatar",
  isOnline = true,
  size = 36
}: AvatarStatusProps) {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        style={{ width: size, height: size }}
        className="rounded-full object-cover ring-2 ring-white shadow-sm"
      />

      {isOnline && (
        <span
          className="
            absolute bottom-0 right-0
            w-2.5 h-2.5
            bg-green-500 border-2 border-white
            rounded-full
          "
        />
      )}
    </div>
  );
}
