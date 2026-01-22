"use client";

import { motion } from "framer-motion";
import { Palette, Building2, Trophy, Shirt, GraduationCap, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/constants";

const PARTNER_TYPES = [
  { icon: Trophy, label: "Sports Teams" },
  { icon: Building2, label: "Corporations" },
  { icon: GraduationCap, label: "Universities" },
  { icon: Plane, label: "Airlines" },
  { icon: Shirt, label: "Apparel Brands" },
];

export default function CoBranding() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-foreground text-white overflow-hidden">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            {...fadeInUp}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
              <Palette className="w-4 h-4" />
              <span className="text-small font-medium">Custom Branding</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold mb-5 leading-tight">
              Your Brand.<br />
              Our Protection.
            </h2>

            <p className="text-body-large text-white/70 mb-8 max-w-lg">
              Elevate your brand with custom co-branded TailShell products. Perfect for sports teams,
              corporate events, universities, and promotional campaigns.
            </p>

            {/* Partner Types */}
            <div className="flex flex-wrap gap-3 mb-10">
              {PARTNER_TYPES.map((partner, index) => (
                <motion.div
                  key={partner.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                >
                  <partner.icon className="w-4 h-4 text-white/60" />
                  <span className="text-small text-white/80">{partner.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white border border-white text-foreground! hover:text-white!  px-8 py-6 text-body font-semibold rounded-full cursor-pointer "
            >
              Inquire About Custom Orders
            </Button>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Product Mockup Placeholder */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />

              {/* Main product placeholder */}
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  {/* Placeholder product shape */}
                  <div className="w-32 h-40 mx-auto mb-6 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center">
                      <span className="text-xs text-white/40 uppercase tracking-wider">Your Logo</span>
                    </div>
                  </div>
                  <p className="text-small text-white/50">Custom branded TailShell</p>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 w-16 h-16 rounded-xl bg-[#0066CC]/30 border border-[#0066CC]/50"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-4 w-12 h-12 rounded-lg bg-[#2D5016]/30 border border-[#2D5016]/50"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-12 w-10 h-10 rounded-lg bg-[#C75B39]/30 border border-[#C75B39]/50"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-semibold mb-1">100+</p>
              <p className="text-small text-white/50">Minimum Order</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold mb-1">2-3</p>
              <p className="text-small text-white/50">Weeks Turnaround</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold mb-1">Full</p>
              <p className="text-small text-white/50">Color Printing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
