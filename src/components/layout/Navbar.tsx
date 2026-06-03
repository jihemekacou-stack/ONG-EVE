import { Link, useLocation } from "react-router-dom";
import customLogo from "@/src/assets/images/logo.png";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  { name: "À propos", path: "/about" },
  { name: "Domaines", path: "/domains" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <img 
                src={customLogo} 
                alt="ONG EVE Logo" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-primary transition-colors group-hover:text-primary-dark">
              ONG EVE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/report">
                <Button variant="destructive" size="sm" className="rounded-full shadow-md hover:shadow-lg transition-all font-semibold">
                  Signaler un abus
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3 space-y-3">
              <Link to="/report" onClick={() => setIsOpen(false)} className="block">
                <Button variant="destructive" className="w-full">
                  Signaler un abus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
