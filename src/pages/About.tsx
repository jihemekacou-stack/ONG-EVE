import { motion } from "motion/react";
import { CheckCircle2, Target, Eye, Leaf } from "lucide-react";

const VALUES = [
  "Solidarité",
  "Intégrité",
  "Transparence",
  "Innovation",
  "Respect de l'environnement",
  "Équité",
];

export default function About() {
  return (
    <div className="w-full">
      {/* HEADER */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6"
          >
            À propos de l'ONG EVE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Créée avec la conviction profonde que chaque communauté mérite un avenir durable. Nous sommes dédiés à la protection de l'environnement, l'autonomisation des femmes et l'éducation des enfants.
          </motion.p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Target className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">Notre Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Renforcer la résilience des populations vulnérables à travers des programmes intégrés alliant préservation de l'environnement, inclusion économique, et protection sociale. Nous agissons au plus près des besoins locaux pour un impact global.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Eye className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-secondary mb-6">Notre Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Bâtir un monde où les communautés vivent en harmonie avec leur environnement, où les femmes sont des leaders économiques, et où chaque enfant grandit à l'abri avec accès à une éducation de qualité.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Nos Valeurs Fondamentales</h2>
            <p className="opacity-90 max-w-2xl mx-auto text-lg">
              Ces principes guident chacune de nos actions et partenariats.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {VALUES.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-center gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span className="font-semibold text-lg">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM (Placeholder) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-8">Gouvernance & Organigramme</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
            Notre équipe dirigeante, composée de professionnels engagés et d'experts de terrain, veille à la stricte application de notre vision et à la transparence financière de nos actions. Le conseil d'administration définit les orientations stratégiques.
          </p>
          
          <div className="w-full max-w-4xl mx-auto h-64 bg-slate-100 rounded-3xl flex items-center justify-center border border-slate-200">
            <span className="text-slate-400 font-medium">[Composant Organigramme Interactif]</span>
          </div>
        </div>
      </section>
    </div>
  );
}
