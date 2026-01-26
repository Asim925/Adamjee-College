"use client";

import Link from "next/link";
import { useState } from "react";
import { SquareMenu, SquareX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Institution", href: "/institution" },
  { name: "Academics", href: "/academics" },
  { name: "Excellence", href: "/excellence" },
  { name: "Achievements", href: "/achievements" },
  { name: "Campus", href: "/campus" },
  { name: "Alumni Outcomes", href: "/alumni" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Adamjee Government Science College Logo"
                width={50}
                height={50}
                className="h-10 w-10 shrink-0 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-base sm:text-lg font-semibold text-primary">
                  Adamjee Government Science College
                </span>
                <span className="text-xs text-muted-foreground">
                  Est. 1961 | Karachi
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="transition-transform duration-200 active:scale-90"
          >
            {mobileMenuOpen ? (
              <SquareX
                style={{ width: "30px", height: "30px", color: "red" }}
              />
            ) : (
              <SquareMenu
                style={{ width: "30px", height: "30px", color: "green" }}
              />
            )}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div className="border-t border-border bg-background px-4 py-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06 },
                  },
                }}
                className="flex flex-col space-y-4"
              >
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { y: 8, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
