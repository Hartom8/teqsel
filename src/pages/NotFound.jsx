import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home as HomeIcon } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <p className="text-[8rem] font-extrabold leading-none text-gradient-gold sm:text-[12rem]">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:scale-105"
        >
          <HomeIcon className="h-4 w-4" />
          Back to {BRAND.name}
        </Link>
      </motion.div>
    </div>
  );
}