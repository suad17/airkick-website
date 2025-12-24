import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4"
    >
      <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl">
        <Link href="/" className="text-2xl font-bold font-display tracking-tighter hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
            <span className="text-primary text-3xl">▲</span> AIRKICK
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Solutions</a>
          <a href="#about" className="hover:text-foreground transition-colors">Vision</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
            Log in
          </Link>
          <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}