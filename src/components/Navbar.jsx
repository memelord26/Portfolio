import { use, useEffect, useState } from "react";
import {cn} from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: 'Home', href: "#hero" },
    { name: 'About', href: "#about" },
    { name: 'Skills', href: "#skills" },
    { name: 'Projects', href: "#projects" },
    { name: 'Contact', href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (isMenuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav 
                className={cn(
                    "fixed w-full z-50 transition-all duration-300", 
                    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
                )} 
            >
                <div className="container flex items-center justify-between">
                    <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Phoebe's</span> Portfolio
                        </span>
                    </a>

                    {/*desktop ver*/}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a href={item.href} key={key} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/*mobile ver*/}
                    <button 
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-foreground z-[60] relative"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    > 
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Separate from navbar */}
            <div className={cn(
                "fixed inset-0 bg-background z-[45] flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a 
                            href={item.href} 
                            key={key} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};
