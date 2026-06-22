import { motion } from "motion/react";

export default function Terms() {
  return (
    <div className="w-full bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12 mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-8 pb-6 border-b border-slate-100">
            Mentions Légales
          </h1>
          
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">1. Éditeur du site</h2>
              <p>
                Le présent site internet est édité par :
              </p>
              <div className="bg-slate-50 p-4 border border-slate-100 rounded-xl mt-3 text-slate-700">
                <strong>ONG EVE</strong><br />
                Organisation Non Gouvernementale à but non lucratif<br />
                Siège Social : soleil 3 / 8tranche, derrière la station Shell KFC, Abidjan, Côte d'Ivoire<br />
                Téléphone : (+225) 27 22 49 80 78 / (+225) 07 59 49 52 34<br />
                Email : jihemekacou@gmail.com
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">2. Directeur de la publication</h2>
              <p>
                Le Directeur de la publication du site est la Présidente de l'ONG EVE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">3. Hébergement</h2>
              <p>
                Ce site est hébergé par :
              </p>
              <div className="bg-slate-50 p-4 border border-slate-100 rounded-xl mt-3 text-slate-700">
                <strong>Vename</strong><br />
                Hébergeur web professionnel.<br />
              </div>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu présent sur ce site, y compris mais sans s'y limiter, les textes, images, graphismes, logos, vidéos et icônes, est la propriété exclusive de l'ONG EVE ou de leurs détenteurs respectifs ayant accordé une licence d'utilisation.
              </p>
              <p className="mt-2">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces éléments est strictement interdite sans l'accord écrit exprès de l'ONG EVE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">5. Limitation de responsabilité</h2>
              <p>
                L'ONG EVE s'efforce de fournir sur son site des informations aussi précises que possible. Toutefois, l'organisation ne pourra être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="mt-2">
                L'utilisation des informations et contenus disponibles sur l'ensemble du site se fait sous l'entière et seule responsabilité de l'utilisateur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-semibold text-slate-800 mb-3">6. Liens hypertextes</h2>
              <p>
                Ce site peut contenir des liens vers d'autres sites internet. L'ONG EVE n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, à leur politique de confidentialité ou à leurs pratiques.
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
