import { Button } from '@/components/ui/button';

interface TabButtonProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

export function TabButton({ active, children, onClick }: TabButtonProps) {
  return (
    <Button
      type="button"
      onClick={onClick}
      className={`
        shrink-0
        transition-all

      `}
      variant={active ? 'default' : 'secondary'}
    >
      {children}
    </Button>
  );
}
