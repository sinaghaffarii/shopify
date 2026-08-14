interface TabButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export function TabButton({ active, children, onClick }: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        shrink-0
        rounded-xl
        px-4
        py-2
        text-[13px]
        font-medium
        transition-all
        ${
          active
            ? 'bg-primary/10 text-primary'
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
        }
      `}
    >
      {children}
    </button>
  );
}
