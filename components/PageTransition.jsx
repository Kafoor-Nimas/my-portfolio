"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Quick, subtle fade when the route changes.
// No exit animation and no blank cover, so the page is never empty.
const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
