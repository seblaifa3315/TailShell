"use client";

import { motion } from "framer-motion";

const PRODUCT_COLORS = [
  { name: "Charcoal", hex: "#2C2C2C" },
  { name: "Navy", hex: "#1E3A5F" },
  { name: "Forest", hex: "#2D5016" },
  { name: "Terracotta", hex: "#C75B39" },
  { name: "Sand", hex: "#D4C4A8" },
];

export default function ColorsBanner() {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-small font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Available in 5 colors
          </p>

          {/* Product Color Swatches */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {PRODUCT_COLORS.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut" as const
                }}
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-3"
              >
                {/* Product Placeholder */}
                <div
                  className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md cursor-pointer"
                  style={{ backgroundColor: color.hex }}
                >
                  {/* Subtle inner highlight */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                </div>

                {/* Color name - visible on hover */}
                <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {color.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
