"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Ruler,
  Feather,
  Droplets,
  ShieldCheck,
  Package,
  Thermometer,
  Leaf,
  ImageIcon,
} from "lucide-react";
import { PRODUCT_SPECS, fadeInUp, staggerContainer, staggerItem } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  ruler: Ruler,
  feather: Feather,
  droplets: Droplets,
  "shield-check": ShieldCheck,
  package: Package,
  thermometer: Thermometer,
  leaf: Leaf,
};

const productImages = [
  { label: "Folded", description: "Pocket-sized" },
  { label: "Unfolded", description: "Full coverage" },
  { label: "Material", description: "Waterproof" },
  { label: "Lifestyle", description: "In action" },
];

export default function ProductDetails() {
  return (
    <section id="product" className="section-padding bg-muted">
      <div className="content-container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-section text-foreground mb-4">
            Engineered for Real Life
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Every detail designed for maximum protection and portability.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {productImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col items-center justify-center ${
                  index === 0 ? "aspect-square" : index === 1 ? "aspect-[4/3]" : "aspect-square"
                }`}
              >
                {/* Placeholder content - replace with actual Image when available */}
                <ImageIcon className="w-8 h-8 text-foreground/20 mb-2" />
                <span className="text-small font-medium text-foreground/40">{image.label}</span>
                <span className="text-small text-foreground/30">{image.description}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Specifications */}
          <motion.div
            {...staggerContainer}
            className="space-y-1"
          >
            {PRODUCT_SPECS.map((spec) => {
              const IconComponent = iconMap[spec.icon];

              return (
                <motion.div
                  key={spec.title}
                  {...staggerItem}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-foreground mb-1">
                      {spec.title}
                    </h3>
                    <p className="text-body text-foreground/80">
                      {spec.primary}
                    </p>
                    <p className="text-small text-muted-foreground">
                      {spec.secondary}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
