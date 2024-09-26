import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent,  SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Mobile = () => {
    const pathname = usePathname()
    return (
        <Sheet>
        <SheetTrigger asChild className="md:hidden flex cursor-pointer"><Menu /></SheetTrigger>
        <SheetContent side={'left'}>
            <Link href={'/'}>
                <h1 className="text-4xl font-creteRound">Khuredu</h1>
            </Link>
            <Separator className="my-3"/>

            <div className="flex flex-col">
                {navLinks.map((nav, i) =>(
                        <Link
                            key={i} 
                            href={nav.route}
                            className={cn(
                            'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
                            pathname === nav.route && 'text-blue-400'
                        )}>
                            {nav.name}
                        </Link>
                    ))}
            </div>
        </SheetContent>
        </Sheet>
    );
};

export default Mobile;