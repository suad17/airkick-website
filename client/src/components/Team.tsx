import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="py-16 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Built by <span className="text-primary">Visionaries</span></h2>
          <p className="text-base text-muted-foreground">
            Airkick is founded by experienced designers dedicated to empowering small businesses.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-6 rounded-2xl text-center w-full max-w-xs"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center mx-auto mb-4 text-lg font-bold text-background">
              F
            </div>
            <h3 className="text-lg font-bold mb-1">Firdaus</h3>
            <p className="text-primary text-sm font-semibold mb-1">Freelance Web Designer</p>
            <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mb-3">
              <MapPin className="w-4 h-4" />
              <span>Malaysia</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate about building stunning websites that help small businesses thrive online.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}