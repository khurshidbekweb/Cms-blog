'use client'

import Link from "next/link";
import { navLinks } from '@/constants'
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ModeTogged from "@/components/shared/mode-togged";
import GlobalSearch from "./global-search";
import Mobile from "./mobile";


const Navbar = () => {
    const pathname = usePathname()    
    
    return (
        <div className="h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background px-5 md:px-1">
            <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
                {/* Logo */}
                <Link href={'/'}>
					<h1 className='text-4xl font-creteRound font-bold'>KhurNews</h1>
				</Link>
                {/* Nav link */}
                <div className=" hidden md:flex gap-2">
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
                <div className="flex gap-1 items-center">
                    <GlobalSearch/>
                    <ModeTogged/>
                    <Mobile/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;