"use client";

import { Instagram, Facebook, Linkedin, Twitter, Mail } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/constants";

const socialLinks = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1D1D1F] text-white py-16 md:py-20">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TailShell</h3>
            <p className="text-body text-white/70 mb-6">
              Portable Protection, Anywhere.
            </p>
            <p className="text-small text-white/50">
              © 2026 TailShell. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-body font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-body text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-body font-semibold mb-4">Connect</h4>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              {socialLinks.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-white/70">
              <Mail className="w-4 h-4" />
              <span className="text-body">vendors@tailshell.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-small text-white/50 text-center">
            Built with care for vendors who want to offer the best to their customers.
          </p>
        </div>
      </div>
    </footer>
  );
}
