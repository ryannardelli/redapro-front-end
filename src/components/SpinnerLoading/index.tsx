export function SpinnerLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 animate-spin text-blue-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z" />
      </svg>
    </div>
  );
}