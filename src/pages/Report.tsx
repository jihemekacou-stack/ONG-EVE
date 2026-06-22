import { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, MapPin, UploadCloud, ShieldAlert, Droplet, Trash2, HeartPulse, Flame, FileWarning } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const CATEGORIES = [
  { id: "violence", label: "Violence / VBG", icon: ShieldAlert },
  { id: "eau", label: "Problème d'Eau", icon: Droplet },
  { id: "dechets", label: "Déchets / Insalubrité", icon: Trash2 },
  { id: "sante", label: "Urgence Santé", icon: HeartPulse },
  { id: "enfant", label: "Enfant en danger", icon: FileWarning },
  { id: "catastrophe", label: "Catastrophe naturelle", icon: Flame },
];

export default function Report() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!selectedCategory) {
      setSubmitResult({ type: "error", message: "Veuillez sélectionner la nature du problème." });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitResult({ type: null, message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Check file sizes (limit to 1MB total to avoid "Request too long" from Web3Forms)
    const files = formData.getAll("attachment") as File[];
    const totalSize = files.reduce((acc, file) => acc + (file.size || 0), 0);
    if (totalSize > 1 * 1024 * 1024) {
      setSubmitResult({ type: "error", message: "Le fichier est trop volumineux. La taille maximale est de 1 MB. Veuillez compresser votre image." });
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", "1d213cd9-2fe1-43b2-8cd5-c1ae6c30fad6");
    formData.append("subject", "Nouveau Signalement - ONG EVE");
    formData.append("category", CATEGORIES.find(c => c.id === selectedCategory)?.label || selectedCategory);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitResult({ type: "success", message: "Signalement envoyé avec succès. Nous interviendrons dès que possible." });
        form.reset();
        setSelectedCategory(null);
        setIsAnonymous(true);
      } else {
        console.error("Error", data);
        setSubmitResult({ type: "error", message: data.message || "Une erreur s'est produite lors de l'envoi." });
      }
    } catch (error) {
      console.error(error);
      setSubmitResult({ type: "error", message: "Impossible de se connecter au serveur. Veuillez réessayer plus tard." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-display font-bold text-secondary mb-4">Signaler un abus</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Utilisez cette plateforme citoyenne pour nous remonter une urgence communautaire, un abus, ou un danger imminent. Votre signalement sera traité en toute confidentialité.
          </p>
        </div>

        {/* REPORT FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12"
        >
          <form className="space-y-8" onSubmit={onSubmit}>
            
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">1. Nature du problème *</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                        selectedCategory === cat.id 
                          ? "border-red-500 bg-red-50 text-red-700" 
                          : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className={`w-8 h-8 mb-2 ${selectedCategory === cat.id ? 'text-red-500' : 'text-slate-400'}`} />
                      <span className="text-sm font-medium text-center">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">2. Description des faits *</h3>
              <textarea 
                name="description"
                required
                rows={5} 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors resize-none" 
                placeholder="Décrivez la situation avec un maximum de détails..."
              ></textarea>
            </div>

            {/* Location & Media */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">3. Localisation *</h3>
                <div className="flex gap-2">
                  <input 
                    name="location"
                    required
                    type="text" 
                    className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-colors" 
                    placeholder="Ville, Quartier, Repère..."
                  />
                  <Button variant="outline" type="button" className="h-[58px] px-6 rounded-xl border-slate-200">
                    <MapPin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">4. Preuves (Optionnel)</h3>
                <label className="flex items-center justify-center gap-2 p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors h-[58px]">
                  <UploadCloud className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">Ajouter 1 fichier max (Max 1 MB)</span>
                  <input type="file" name="attachment" className="hidden" accept="image/*,video/*" />
                </label>
              </div>
            </div>

            {/* Privacy & Submit */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">5. Confidentialité</h3>
              
              <div className="space-y-4 mb-8">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="anonymity" 
                    value="anonymous"
                    checked={isAnonymous} 
                    onChange={() => setIsAnonymous(true)}
                    className="w-5 h-5 text-red-600 focus:ring-red-500" 
                  />
                  <span className="font-medium text-slate-700">Rester anonyme (Recommandé pour les cas sensibles)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="radio" 
                    name="anonymity" 
                    value="public"
                    checked={!isAnonymous} 
                    onChange={() => setIsAnonymous(false)}
                    className="w-5 h-5 text-red-600 focus:ring-red-500" 
                  />
                  <span className="font-medium text-slate-700">Partager mes coordonnées pour le suivi</span>
                </label>
              </div>

              {!isAnonymous && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                >
                  <input type="text" name="name" required={!isAnonymous} placeholder="Nom et prénom" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500" />
                  <input type="tel" name="phone" placeholder="Téléphone ou WhatsApp" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500" />
                </motion.div>
              )}

              {submitResult.type && (
                <div className={`p-4 rounded-xl text-sm mb-6 ${submitResult.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {submitResult.message}
                </div>
              )}

              <Button type="submit" variant="destructive" className="w-full h-14 text-lg font-bold" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Soumettre le signalement"}
              </Button>
            </div>
            
          </form>
        </motion.div>

      </div>
    </div>
  );
}
