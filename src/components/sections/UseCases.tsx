"use client";

import { motion } from "framer-motion";
import { Mountain, Trophy, Flag, Plane, ShieldCheck } from "lucide-react";
import { USE_CASES, fadeInUp, staggerContainer, staggerItem } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  mountain: Mountain,
  stadium: Trophy,
  flag: Flag,
  plane: Plane,
  shield: ShieldCheck,
};

export default function UseCases() {
  return (
    <section id="use-cases" className="section-padding bg-white">
      <div className="content-container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-section text-foreground mb-4">
            One Solution, Endless Applications
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            TailShell adapts to any environment where seating meets uncertainty.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {USE_CASES.map((useCase) => {
            const IconComponent = iconMap[useCase.icon];

            return (
              <motion.div
                key={useCase.id}
                {...staggerItem}
                className="group relative bg-muted rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderColor: "transparent",
                }}
                whileHover={{
                  borderColor: useCase.color,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                  style={{
                    boxShadow: `inset 0 0 0 2px ${useCase.color}`,
                    borderRadius: "1rem",
                  }}
                />

                {/* Image Placeholder with gradient background */}
                <div
                  className="relative h-48 md:h-56 overflow-hidden transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${useCase.color}20 0%, ${useCase.color}40 100%)`,
                  }}
                >
                  {/* Placeholder text - replace with actual Image when available */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-small text-foreground/30 uppercase tracking-wider">
                      Add {useCase.title} Image
                    </span>
                  </div> */}
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Icon Badge */}
                  <div
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center z-10"
                    style={{ backgroundColor: useCase.color }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p
                    className="text-small font-semibold uppercase tracking-wider mb-2"
                    style={{ color: useCase.color }}
                  >
                    {useCase.title}
                  </p>
                  <h3 className="text-subsection text-foreground mb-3">
                    {useCase.headline}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
