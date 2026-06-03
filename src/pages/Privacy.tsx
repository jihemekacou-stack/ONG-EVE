import { motion } from "motion/react";

export default function Privacy() {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-8 pb-6 border-b border-slate-100">
            Politique de Confidentialité
          </h1>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">1. Collecte des données personnelles</h2>
              <p>
                Dans le cadre de nos activités, l'ONG EVE peut être amenée à collecter des données personnelles vous concernant, notamment lorsque vous :
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Remplissez un formulaire de contact ou de signalement ;</li>
                <li>Vous inscrivez à notre newsletter ;</li>
                <li>Soumettez une candidature pour devenir bénévole ;</li>
                <li>Naviguez sur notre site internet (via les cookies).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">2. Utilisation des données</h2>
              <p>
                Les informations que nous recueillons sont utilisées exclusivement dans le but de :
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Traiter vos demandes, candidatures ou signalements ;</li>
                <li>Vous tenir informé(e) de nos actualités, projets et rapports d'impact ;</li>
                <li>Améliorer l'expérience utilisateur et la navigation sur notre site internet.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">3. Protection et sécurité</h2>
              <p>
                L'ONG EVE s'engage à garantir la sécurité et la confidentialité de vos données personnelles. Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour empêcher toute altération, perte ou accès non autorisé à vos informations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">4. Partage des données</h2>
              <p>
                Nous ne vendons, n'échangeons ni ne louons vos données personnelles à des tiers. Vos informations ne sont accessibles qu'aux membres autorisés de notre équipe et, le cas échéant, aux prestataires techniques (hébergement, envoi d'emails) agissant sous nos directives strictes de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">5. Vos droits</h2>
              <p>
                Conformément aux réglementations en vigueur (notamment le RGPD si applicable), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez également vous opposer à leur traitement.
              </p>
              <p className="mt-2">
                Pour faire valoir ces droits, veuillez nous contacter à l'adresse suivante : <strong>privacy@ongeve.org</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">6. Cookies</h2>
              <p>
                Notre site utilise des cookies essentiels pour assurer son bon fonctionnement. Aucune donnée à caractère personnel n'est collectée à votre insu via ces traceurs sans votre consentement préalable.
              </p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-500 text-center">
            Dernière mise à jour : Juin 2026
          </div>
        </motion.div>
      </div>
    </div>
  );
}
