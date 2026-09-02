import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BellIcon,
  LogOutIcon,
  SettingsIcon,
  User02Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Navbar = () => {
  return (
    <nav className="py-3 border-b flex items-center justify-end">
      <div className="relative">
        <HugeiconsIcon icon={BellIcon} size={18} strokeWidth={1.5} />
        <span className="absolute -top-0.5 right-0 size-2 bg-primary rounded-full"></span>
        <span className="absolute -top-0.5 right-0 size-2 bg-primary rounded-full animate-ping"></span>
      </div>
      <hr className=" w-7 rotate-90 mx-2" />
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" className={"me-5"}>
              <p> سلام مدیر</p>
              <HugeiconsIcon
                icon={User02Icon}
                strokeWidth={1.5}
                className="size-6 p-1 ms-4 text-primary bg-primary/10 rounded-full "
              />
            </Button>
          }
        />
        <DropdownMenuContent>
          <DropdownMenuItem>
            <HugeiconsIcon icon={UserIcon} size={18} strokeWidth={1.5} />
            <p>حساب کاربری</p>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <HugeiconsIcon icon={SettingsIcon} size={18} strokeWidth={1.5} />
            <p>تنظیمات</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <HugeiconsIcon icon={LogOutIcon} size={18} strokeWidth={1.5} />
            <p>خروج از حساب</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
