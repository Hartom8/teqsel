import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/constants";

/**
 * LoadingScreen — brief branded loader shown on first mount.
 */
export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative">
              <span className="text-4xl font-extrabold tracking-tight text-primary-foreground">
                {BRAND.name}
              </span>
              <motion.span
                className="absolute -right-2 top-0 h-2 w-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-primary-foreground/20">
              <motion.div
                className="h-full bg-accent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}