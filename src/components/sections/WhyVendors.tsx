"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Lightbulb,
  Package,
  Users,
  ShoppingBag,
  Megaphone,
} from "lucide-react";
import { VENDOR_BENEFITS, fadeInUp, staggerContainer, staggerItem } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "trending-up": TrendingUp,
  lightbulb: Lightbulb,
  package: Package,
  users: Users,
  "shopping-bag": ShoppingBag,
  megaphone: Megaphone,
};

export default function WhyVendors() {
  return (
    <section id="why-vendors" className="section-padding bg-white">
      <div className="content-container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-section text-foreground mb-4">
            Partner with Innovation
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            TailShell isn&apos;t just a product—it&apos;s a profit opportunity.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {VENDOR_BENEFITS.map((benefit) => {
            const IconComponent = iconMap[benefit.icon];

            return (
              <motion.div
                key={benefit.headline}
                {...staggerItem}
                className="group p-8 rounded-2xl bg-muted hover:bg-foreground transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-foreground group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-white group-hover:text-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-subsection text-foreground group-hover:text-white mb-3 transition-colors duration-300">
                  {benefit.headline}
                </h3>
                <p className="text-body text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
