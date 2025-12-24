import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "200",
    currency: "RM",
    description: "Perfect for startups and small businesses",
    features: [
      "1 Page Website",
      "Mobile Responsive Design",
      "SEO Optimized",
      "Hosting Included",
      "SSL Certificate",
      "Email Support"
    ],
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "500",
    currency: "RM",
    description: "For growing businesses that need more",
    features: [
      "Up to 5 Pages",
      "Mobile & Desktop Optimized",
      "SEO Optimized",
      "Free Domain 1 Year",
      "Hosting Included",
      "SSL Certificate",
      "Priority Support",
      "Analytics Dashboard",
      "Contact Forms"
    ],
    cta: "Get Started",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    currency: "",
    description: "Full-featured solution for enterprises",
    features: [
      "Unlimited Pages",
      "Full Responsiveness",
      "SEO Optimized",
      "Free Domain 1 Year",
      "Hosting Included",
      "SSL Certificate",
      "Priority Support",
      "Custom Features",
      "API Access"
    ],
    cta: "Contact Us"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, <span className="text-primary">Transparent</span> Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Affordable solutions for every size business. All plans include hosting, SSL, and ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl transition-all duration-300 ${
                plan.highlighted 
                  ? "glass-panel border-primary/50 shadow-xl scale-105 md:scale-110" 
                  : "glass-panel hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-purple-400 text-background px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.currency && <span className="text-xl text-muted-foreground">{plan.currency}</span>}
                  </div>
                  {plan.price !== "Custom" && <p className="text-muted-foreground text-sm mt-2">One-time setup</p>}
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full rounded-full py-6 font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                      : "bg-transparent border-white/10 text-foreground hover:bg-white/5"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}