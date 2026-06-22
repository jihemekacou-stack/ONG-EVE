import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitResult({ type: null, message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "1d213cd9-2fe1-43b2-8cd5-c1ae6c30fad6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitResult({ type: "success", message: "Message envoyé avec succès ! Nous vous recontacterons bientôt." });
        form.reset();
      } else {
        console.error("Error", data);
        setSubmitResult({ type: "error", message: data.message || "Une erreur s'est produite lors de l'envoi du message." });
      }
    } catch (error) {
      console.error(error);
      setSubmitResult({ type: "error", message: "Impossible de se connecter au serveur. Veuillez réessayer plus tard." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6"
          >
            Contactez-nous
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Nous sommes à votre écoute pour toute question concernant nos projets, nos partenariats ou vos dons.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-secondary mb-6">Nos Coordonnées</h2>
                <p className="text-slate-600 text-lg mb-8">
                  Notre équipe est disponible du lundi au vendredi, de 8h00 à 17h00. N'hésitez pas à nous joindre par téléphone, par email ou à nous rendre visite.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg mb-1">Siège Social</h4>
                    <p className="text-slate-600">soleil 3 / 8tranche<br />derrière la station Shell KFC<br />Abidjan, Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg mb-1">Téléphone & WhatsApp</h4>
                    <p className="text-slate-600">Fixe: (+225) 27 22 49 80 78<br />Mobile: (+225) 07 59 49 52 34</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg mb-1">Email</h4>
                    <p className="text-slate-600">jihemekacou@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100"
            >
              <h3 className="text-2xl font-display font-bold text-secondary mb-8">Envoyez-nous un message</h3>
              
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nom complet *</label>
                    <input type="text" name="name" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Jean Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Adresse email *</label>
                    <input type="email" name="email" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="jean@exemple.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Sujet *</label>
                  <select name="subject" required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-slate-700">
                    <option>Demande d'information générale</option>
                    <option>Proposition de partenariat</option>
                    <option>Question sur les dons</option>
                    <option>Devenir bénévole</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message *</label>
                  <textarea name="message" required rows={5} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>

                {submitResult.type && (
                  <div className={`p-4 rounded-xl text-sm ${submitResult.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {submitResult.message}
                  </div>
                )}

                <Button variant="default" className="w-full h-14 text-lg" disabled={isSubmitting}>
                  <Send className="w-5 h-5 mr-2" /> {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité quant à l'utilisation de vos données pour vous répondre.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[400px] w-full bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127110.84277749007!2d-4.089901777085759!3d5.348434206262441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
