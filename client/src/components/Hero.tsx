import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Zap, Globe } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_futuristic_blue_wind_flow_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Flow" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm">
            Web Solutions for Every Business
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Get Online <br className="hidden md:block" />
          <span className="text-gradient-primary">Simply & Easily</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mb-10"
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            AirKick is a startup web company that helps businesses get online easily. We design modern websites and build simple systems that are fast, secure, and easy to use.
          </p>
          <p className="text-lg md:text-xl text-primary/80 leading-relaxed font-medium">
            Our goal is to make technology simple, affordable, and effective for everyone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
            Launch Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-lg h-14 bg-transparent border-white/10 hover:bg-white/5 backdrop-blur-sm text-foreground">
            View Documentation
          </Button>
        </motion.div>

        {/* Floating Stats/Badges */}
        <div className="grid grid-cols-3 gap-8 mt-24 w-full max-w-3xl">
          {[
            { icon: Wind, label: "Fast Loading", value: "1s" },
            { icon: Zap, label: "Secure Sites", value: "100%" },
            { icon: Globe, label: "Global Ready", value: "Always" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
              className="glass-panel p-4 rounded-2xl flex flex-col items-center gap-2"
            >
              <stat.icon className="w-6 h-6 text-primary mb-1" />
              <div className="text-2xl font-bold font-display">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}