"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS, fadeInUp, staggerContainer, staggerItem } from "@/lib/constants";

// Helper function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

export default function Testimonials() {
  return (
    <section className="section-padding bg-muted">
      <div className="content-container">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-section text-foreground mb-4">
            Trusted by Vendors, Loved by Customers
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            See what partners are saying about TailShell.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              {...staggerItem}
              className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div
                className="absolute -top-4 left-8 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: testimonial.color }}
              >
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-body text-foreground/80 mb-6 pt-4 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar with initials - replace with Image when available */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-body"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <p className="text-body font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-small text-muted-foreground">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Accent Color Bottom Border */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                style={{ backgroundColor: testimonial.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
