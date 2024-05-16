import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
// import { CATEGORIES } from "@/app/utils/categories";
// import { Category } from "@/types";
import Link from "next/link";

export default function ResponsiveMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-6 w-6 md:hidden" />
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col gap-4">
          <Link href="/buy">
            <Button variant="ghost">Buy</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
