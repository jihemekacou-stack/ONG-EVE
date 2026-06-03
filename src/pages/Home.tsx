import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Droplet, GraduationCap, Heart, Home as HomeIcon, Leaf, Shield, UserCheck, Users, UsersRound, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Link } from "react-router-dom";
import envAfrica from "@/src/assets/images/env_africa_1780481848334.png";

const DOMAINS = [
  {
    title: "Environnement",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-100",
    actions: ["Reboisement", "Gestion des déchets", "Changement climatique", "Conservation"],
  },
  {
    title: "Autonomisation",
    icon: UserCheck,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    actions: ["Formation professionnelle", "Leadership féminin", "Entrepreneuriat", "Inclusion"],
  },
  {
    title: "Protection Enfants",
    icon: Shield,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    actions: ["Droits de l'enfant", "Lutte contre la traite", "Protection scolaire", "Prévention"],
  },
  {
    title: "Santé",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-100",
    actions: ["Santé maternelle", "Santé infantile", "Sensibilisation", "Prévention"],
  },
  {
    title: "Éducation",
    icon: GraduationCap,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    actions: ["Alphabétisation", "Classes passerelles", "Formation des jeunes", "Clubs verts"],
  },
  {
    title: "Communauté",
    icon: UsersRound,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    actions: ["Renforcement des capacités", "Cohésion sociale", "Plans d'action"],
  },
  {
    title: "Eau & Assainissement",
    icon: Droplet,
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    actions: ["Eau potable", "Assainissement", "Hygiène", "Infrastructures"],
  },
];

const STATS = [
  { value: "50 000+", label: "Bénéficiaires", icon: Users },
  { value: "250", label: "Projets réalisés", icon: HomeIcon },
  { value: "100", label: "Communautés", icon: Heart },
  { value: "15", label: "Régions couvertes", icon: MapPin },
]

// Note: MapPin missing in lucide import, let's fix it above or just use another icon, I'll use Leaf for regions temporarily if I don't import MapPin. Ah wait, I will add MapPin to imports.

const FAQS = [
  {
    question: "Quelle est la mission principale de l'ONG EVE ?",
    answer: "Notre mission principale est l'autonomisation des femmes, la protection des enfants, l'accès à la santé et la préservation de l'environnement pour construire des communautés plus fortes et durables."
  },
  {
    question: "Où intervenez-vous précisément ?",
    answer: "Nous intervenons dans plusieurs régions d'Afrique, en ciblant principalement les zones rurales et périurbaines où les populations sont les plus vulnérables."
  },
  {
    question: "Comment puis-je soutenir vos actions ?",
    answer: "Vous pouvez nous soutenir en devenant bénévole, en formant un partenariat avec nous, ou en partageant nos campagnes de sensibilisation."
  },
  {
    question: "Comment sont gérés les fonds et les ressources ?",
    answer: "La transparence est l'une de nos valeurs fondamentales. Tous les fonds sont rigoureusement alloués aux projets sur le terrain et des rapports d'impact sont publiés régulièrement."
  },
  {
    question: "Puis-je proposer un projet communautaire ?",
    answer: "Oui, nous sommes toujours à l'écoute des besoins locaux. Vous pouvez utiliser notre page de contact ou la fonctionnalité de signalement pour soumettre une idée de projet."
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${envAfrica})` }}
        />
        <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight max-w-5xl mx-auto"
          >
            AGIR AUJOURD’HUI POUR CONSTRUIRE LES COMMUNAUTÉS DURABLES DE DEMAIN
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto"
          >
            L’ONG EVE œuvre pour l’autonomisation des populations, la protection des enfants et la préservation de l’environnement en Afrique et dans le monde.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/partners">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-secondary font-semibold">
                Devenir partenaire
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button size="lg" variant="default" className="w-full sm:w-auto font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white">
                Rejoindre nos bénévoles
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
                >
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-secondary mb-2">{stat.value}</h3>
                  <p className="text-slate-600 font-medium">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOMAINES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Nos Domaines d'Intervention</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Des actions concrètes et ciblées pour un impact durable sur les communautés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {DOMAINS.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group rounded-2xl border border-slate-100 p-6 hover:shadow-xl transition-all duration-300 bg-white hover:border-primary/20 relative overflow-hidden"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${domain.bgColor} ${domain.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-800 mb-4">{domain.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {domain.actions.map((action, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mr-2" />
                        {action}
                      </li>
                    ))}
                  </ul>
                  <Link to="/domains" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark mt-auto">
                    Découvrir <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Questions Fréquentes</h2>
            <p className="text-slate-600 text-lg">
              Tout ce que vous devez savoir sur nos actions et notre organisation.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  <span className="font-semibold text-slate-800 pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Changeons des vies, ensemble.</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Votre soutien nous permet de déployer nos programmes sur le terrain et d'apporter l'aide nécessaire aux plus vulnérables.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-semibold text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary">Nous contacter</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
