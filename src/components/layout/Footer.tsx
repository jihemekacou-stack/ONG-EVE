import { Link } from "react-router-dom";
import customLogo from "@/src/assets/images/logo.png";
import { Leaf, Mail, MapPin, Phone, Facebook } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Intro */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center bg-white p-1 rounded-full">
                <img 
                  src={customLogo} 
                  alt="ONG EVE Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                ONG EVE
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white">
              Agissant pour l'autonomisation des populations, la protection des
              enfants et la préservation de l'environnement depuis 15 ans.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ONGEVE2010" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">À propos de nous</Link></li>
              <li><Link to="/domains" className="text-sm hover:text-white transition-colors">Domaines d'intervention</Link></li>
              <li><Link to="/partners" className="text-sm hover:text-white transition-colors">Devenir Partenaire</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm text-white">soleil 3 / 8tranche<br />derrière la station Shell KFC<br />Abidjan, Côte d'Ivoire</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm text-white">(+225) 07 59 49 52 34</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm text-white">jihemekacou@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Newsletter</h3>
            <p className="text-sm text-white mb-4">
              Recevez nos dernières actualités et rapports d'impact directement dans votre boîte mail.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="bg-secondary-dark border border-slate-700 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <Button variant="default" className="w-full text-sm">S'abonner</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
          <p>© {new Date().getFullYear()} ONG EVE. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
