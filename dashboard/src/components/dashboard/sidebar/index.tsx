import menu_list from "@/components/dashboard/sidebar/Menus";
import { Button } from "@/components/ui/button";
import { Door01Icon, ShopifyIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="p-2 border-e w-58 min-h-screen flex flex-col">
      <header>
        <div className="flex items-center gap-3">
          <HugeiconsIcon
            icon={ShopifyIcon}
            size={20}
            strokeWidth={1.5}
            className="size-8 bg-primary/20 text-primary p-1.5 rounded-full"
          />
          <p>فروشگاه من</p>
        </div>
      </header>

      <main className="mt-10 border-s-2 border-primary/20">
        <ul className="space-y-1.5">
          {menu_list.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className={({ isActive }: { isActive: boolean }) =>
                    `flex items-center gap-3 pr-3 py-2 hover:bg-primary/10 rounded-e-lg ${isActive ? "border-s-2  border-primary bg-primary/20 text-primary" : ""}`
                  }
                >
                  <HugeiconsIcon icon={item.icon} size={20} strokeWidth={1.5} />
                  <p>{item.title}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className="flex items-center justify-center mt-auto">
        <Button
          variant={"outline"}
          className="w-full text-xs sm:text-sm font-medium"
        >
          <HugeiconsIcon icon={Door01Icon} size={20} strokeWidth={1.5} />
          <p>خروج از حساب</p>
        </Button>
      </footer>
    </aside>
  );
};

export default Sidebar;
