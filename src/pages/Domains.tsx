import { motion } from "motion/react";
import { Droplet, GraduationCap, Heart, Leaf, Shield, UserCheck, UsersRound } from "lucide-react";

// Local image imports
import envAfrica from "@/src/assets/images/env_africa_1780481848334.png";
import womenAfrica from "@/src/assets/images/women_africa_1780481863914.png";
import childAfrica from "@/src/assets/images/child_africa_1780481878808.png";
import healthAfrica from "@/src/assets/images/health_africa_1780481894856.png";
import eduAfrica from "@/src/assets/images/edu_africa_1780481915808.png";
import devAfrica from "@/src/assets/images/dev_africa_1780481929762.png";
import waterAfrica from "@/src/assets/images/water_africa_1780481944202.png";

const DOMAINS_DETAILS = [
  {
    id: "environnement",
    title: "Environnement",
    subtitle: "Préserver pour l'avenir",
    icon: Leaf,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    description: "Nous luttons contre le changement climatique et la dégradation de l'environnement à travers des actions communautaires de conservation.",
    actions: ["Reboisement massif", "Gestion des déchets", "Conservation des écosystèmes"],
    image: envAfrica
  },
  {
    id: "autonomisation",
    title: "Autonomisation des femmes",
    subtitle: "L'égalité en action",
    icon: UserCheck,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    description: "Soutenir l'indépendance économique et le leadership des femmes est essentiel pour le développement durable des communautés.",
    actions: ["Associations d'Épargne", "Formations professionnelles", "Leadership féminin"],
    image: womenAfrica
  },
  {
    id: "protection",
    title: "Protection des enfants",
    subtitle: "Défendre l'innocence",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description: "Chaque enfant a le droit de grandir en sécurité, à l'abri de l'exploitation, de la violence et de la précarité.",
    actions: ["Plaidoyer pour les droits", "Lutte contre le travail infantile", "Soutien psychosocial"],
    image: childAfrica
  },
  {
    id: "sante",
    title: "Santé",
    subtitle: "Soins et prévention",
    icon: Heart,
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    description: "Améliorer l'accès aux soins de santé de base et promouvoir les comportements préventifs dans les zones reculées.",
    actions: ["Campagnes de vaccination", "Santé maternelle et infantile", "Sensibilisation aux maladies"],
    image: healthAfrica
  },
  {
    id: "education",
    title: "Éducation",
    subtitle: "Savoir pour grandir",
    icon: GraduationCap,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    description: "L'éducation est le levier principal pour briser le cycle de la pauvreté et construire un avenir meilleur.",
    actions: ["Réhabilitation d'écoles", "Distribution de kits scolaires", "Cours d'alphabétisation"],
    image: eduAfrica
  },
  {
    id: "developpement",
    title: "Développement communautaire",
    subtitle: "Bâtir ensemble",
    icon: UsersRound,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    description: "Renforcer les capacités des communautés locales pour qu'elles deviennent actrices de leur propre développement socio-économique.",
    actions: ["Création de coopératives", "Infrastructures locales", "Formation en gestion"],
    image: devAfrica
  },
  {
    id: "eau",
    title: "Eau, Hygiène et Assainissement",
    subtitle: "Source de vie",
    icon: Droplet,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    description: "Garantir un accès durable à l'eau potable et promouvoir les bonnes pratiques d'hygiène pour réduire les maladies hydriques.",
    actions: ["Construction de forages", "Sensibilisation à l'hygiène", "Gestion des points d'eau"],
    image: waterAfrica
  }
];

export default function Domains() {
  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6"
          >
            Nos Domaines d'Intervention
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez en détail les 7 secteurs clés sur lesquels nous concentrons nos efforts et nos ressources pour générer un impact transformateur au sein des communautés.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOMAINS_DETAILS.map((domain, idx) => {
              const Icon = domain.icon;

              return (
                <motion.div 
                  key={domain.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full">
                    <img src={domain.image} alt={domain.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply" />
                    <div className={`absolute -bottom-6 left-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${domain.bgColor} ${domain.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="p-8 pt-10 flex-1 flex flex-col">
                    <h4 className="text-primary font-semibold tracking-wider uppercase text-xs mb-1">{domain.subtitle}</h4>
                    <h3 className="text-xl font-display font-bold text-slate-800 mb-3">{domain.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {domain.description}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <h5 className="font-medium text-slate-800 text-sm mb-3">Actions clés :</h5>
                      <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                        {domain.actions.map((action, i) => (
                          <li key={i}>{action}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
