import { image } from "framer-motion/client";

// Navigation Links
export const NAV_LINKS = [
  { label: "Use Cases", href: "#use-cases" },
  { label: "Product", href: "#product" },
  { label: "Why TailShell", href: "#why-vendors" },
  { label: "Contact", href: "#contact" },
] as const;

// Use Cases Data
export const USE_CASES = [
  {
    id: "outdoor",
    image: "/images/outdoor-adventures.jpg",
    title: "Outdoor Adventures",
    headline: "Rugged Protection for Nature Lovers",
    description:
      "From hiking trails to camping sites, TailShell keeps you clean and dry on any surface. Waterproof, compact, and built to withstand the elements.",
    color: "#2D5016",
    icon: "mountain",
  },
  {
    id: "stadium",
    image: "/images/sports-stadium.jpg",
    title: "Sports Stadiums",
    headline: "Game Day Comfort, Every Seat",
    description:
      "Protect fans from dirty, wet, or uncomfortable stadium seating. TailShell enhances the game-day experience while keeping clothing spotless.",
    color: "#0066CC",
    icon: "stadium",
  },
  {
    id: "golf",
    image: "/images/golf-cart.jpg",
    title: "Golf Courses",
    headline: "Tee Time Without Compromise",
    description:
      "Shield golfers from scorching cart seats and damp benches. TailShell adds a touch of class and comfort to every round.",
    color: "#4A7C59",
    icon: "flag",
  },
  {
    id: "airport",
    image: "/images/airport.jpg",
    title: "Airports & Travel",
    headline: "Travel Clean, Arrive Fresh",
    description:
      "Long layovers made bearable. TailShell provides a hygienic barrier in waiting areas, on shuttle seats, and during transit.",
    color: "#5E6AD2",
    icon: "plane",
  },
  {
    id: "versatile",
    image: "/images/everyday.jpg",
    title: "Everyday Versatility",
    headline: "Your Daily Defense",
    description:
      "Parks, public benches, events, food trucks—TailShell goes wherever life takes you. The ultimate portable protection.",
    color: "#6B7280",
    icon: "shield",
  },
] as const;

// Product Specifications
export const PRODUCT_SPECS = [
  {
    title: "Material",
    primary: "Premium waterproof fabric with reinforced stitching",
    secondary: "Durable, tear-resistant, easy to clean",
    icon: "layers",
  },
  {
    title: "Dimensions",
    primary: "Folded: 4\" x 5\" x 0.5\" (fits in pocket/purse)",
    secondary: "Unfolded: 18\" x 20\" (full seat coverage)",
    icon: "ruler",
  },
  {
    title: "Weight",
    primary: "Ultra-lightweight: Only 3 oz",
    secondary: "Forget it's there until you need it",
    icon: "feather",
  },
  {
    title: "Waterproof Rating",
    primary: "100% waterproof barrier",
    secondary: "Keeps moisture out, comfort in",
    icon: "droplets",
  },
  {
    title: "Durability",
    primary: "Built for 500+ uses",
    secondary: "Machine washable for easy maintenance",
    icon: "shield-check",
  },
  {
    title: "Portability",
    primary: "Compact folding design",
    secondary: "Includes integrated carry strap/pouch",
    icon: "package",
  },
  {
    title: "Temperature Resistance",
    primary: "Protects from hot surfaces (golf carts, metal bleachers)",
    secondary: "Insulates from cold concrete and stone",
    icon: "thermometer",
  },
  {
    title: "Eco-Friendly",
    primary: "Reusable, reduces disposable waste",
    secondary: "Made from sustainable materials",
    icon: "leaf",
  },
] as const;

// Vendor Benefits
export const VENDOR_BENEFITS = [
  {
    icon: "trending-up",
    headline: "Maximize Your Returns",
    description:
      "TailShell's premium positioning and low cost of goods sold means healthy margins for your business. A product that sells itself with minimal overhead.",
  },
  {
    icon: "lightbulb",
    headline: "Answer Unmet Demand",
    description:
      "Your customers are already looking for this solution. Be the first to offer TailShell and capture a market hungry for portable seat protection.",
  },
  {
    icon: "package",
    headline: "Compact & Easy to Stock",
    description:
      "Small footprint, no expiration, no special storage. TailShell fits seamlessly into any retail environment without tying up valuable shelf space.",
  },
  {
    icon: "users",
    headline: "Cross-Demographic Bestseller",
    description:
      "From outdoor enthusiasts to commuters to parents, TailShell appeals to diverse customer segments, driving consistent sales year-round.",
  },
  {
    icon: "shopping-bag",
    headline: "Impulse Buy Magnet",
    description:
      "Perfectly priced and positioned for impulse purchases. Place TailShell near checkouts, gear sections, or high-traffic areas and watch it move.",
  },
  {
    icon: "megaphone",
    headline: "We Help You Sell",
    description:
      "Receive promotional materials, display stands, and co-marketing support to drive awareness and conversions in your store.",
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    quote:
      "Our customers rave about TailShell. Since adding it to our outdoor gear section, we've seen repeat purchases and glowing reviews. It's become a must-have item for hikers and campers.",
    name: "Sarah Mitchell",
    title: "Owner",
    company: "Summit Outdoor Outfitters",
    color: "#2D5016",
  },
  {
    quote:
      "TailShell has been a surprisingly strong performer for us. The margins are excellent, and it practically sells itself at the register. It's rare to find a product that's both profitable and solves a real problem.",
    name: "Marcus Chen",
    title: "Retail Manager",
    company: "ProSport Goods",
    color: "#0066CC",
  },
  {
    quote:
      "We used to get complaints about dirty seats and hot surfaces at our facility. Since partnering with TailShell and offering them at our pro shop, those complaints have vanished. It's a game-changer for customer experience.",
    name: "Jennifer Rodriguez",
    title: "Operations Director",
    company: "Greenview Golf & Country Club",
    color: "#4A7C59",
  },
] as const;

// Business Types for Contact Form
export const BUSINESS_TYPES = [
  { value: "outdoor-retailer", label: "Outdoor Retailer" },
  { value: "sporting-goods", label: "Sporting Goods Store" },
  { value: "golf-pro-shop", label: "Golf Pro Shop" },
  { value: "stadium-concessionaire", label: "Stadium/Arena Concessionaire" },
  { value: "convenience-store", label: "Convenience Store" },
  { value: "other", label: "Other" },
] as const;

// Footer Links
export const FOOTER_LINKS = [
  { label: "Use Cases", href: "#use-cases" },
  { label: "Product Details", href: "#product" },
  { label: "Why TailShell", href: "#why-vendors" },
  { label: "Contact", href: "#contact" },
] as const;

// Animation Variants
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
  viewport: { once: true, margin: "-100px" },
};

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, margin: "-100px" },
};

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};
