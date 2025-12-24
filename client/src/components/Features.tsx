import { motion } from "framer-motion";
import { Shield, AlertCircle, Palette, Search, DollarSign, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    problem: "Credibility & Trust",
    solution: "People expect a website. It makes the business look legitimate and professional."
  },
  {
    icon: AlertCircle,
    problem: "Dependence on Third-Party Platforms",
    solution: "Relying only on social media is risky—accounts can be limited, hacked, or lose reach."
  },
  {
    icon: Palette,
    problem: "Weaker Brand Identity",
    solution: "Without a website, it's harder to build a strong, consistent brand."
  },
  {
    icon: Search,
    problem: "Hard to Find Online",
    solution: "Your own website helps you rank in search engines and be discoverable when customers look for you."
  },
  {
    icon: DollarSign,
    problem: "Web Design is Expensive",
    solution: "Professional websites starting at just RM 200 with hosting, domain, and SSL included."
  },
  {
    icon: Headphones,
    problem: "Don't Know How to Manage It",
    solution: "We handle the technical stuff so you can focus on running your business."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-background">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">We Solve Your <span className="text-primary">Business Problems</span></h2>
          <p className="text-lg text-muted-foreground">
            Every feature is designed to address real challenges that small businesses face when going online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-panel p-8 rounded-3xl hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-red-400/80">Problem:</h3>
              <p className="text-sm mb-4 text-muted-foreground leading-relaxed">
                {feature.problem}
              </p>
              <h3 className="text-lg font-bold mb-2 text-primary">Solution:</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}