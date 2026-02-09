import Link from "next/link";

const footerNavigation = {
  institution: [
    { name: "About Us", href: "/institution" },
    { name: "History", href: "/institution#history" },
    { name: "Leadership", href: "/institution#leadership" },
  ],
  academics: [
    { name: "Pre-Medical", href: "/academics/pre-medical" },
    { name: "Pre-Engineering", href: "/academics/pre-engineering" },
    { name: "Computer Science", href: "/academics/computer-science" },
  ],
  resources: [
    { name: "Excellence", href: "/excellence" },
    { name: "Achievements", href: "/achievements" },
    { name: "Campus", href: "/campus" },
    { name: "Alumni Outcomes", href: "/alumni" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Institution Identity */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold">
              Adamjee Government Science College
            </h3>

            <div className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <p>Karachi, Sindh, Pakistan</p>
              <p>Established 1961</p>
              <p className="mt-4 text-xs">
                Affiliated with Board of Intermediate Education Karachi
              </p>
            </div>
          </div>

          {/* Institution Links */}
          <div>
            <h4 className="font-medium text-primary-foreground">Institution</h4>
            <ul className="mt-4 space-y-2">
              {footerNavigation.institution.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Links */}
          <div>
            <h4 className="font-medium text-primary-foreground">Academics</h4>
            <ul className="mt-4 space-y-2">
              {footerNavigation.academics.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-medium text-primary-foreground">Resources</h4>
            <ul className="mt-4 space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-xs text-primary-foreground/60">
            © 2026 | Designed & Developed by{" "}
            <Link
              href="https://www.linkedin.com/in/muhammad-asim-nazeer-b30b7a2a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-foreground hover:underline underline-offset-4"
            >
              M. Asim Nazeer
            </Link>
            , a proud student of Adamjee Govt. Science College
          </p>
        </div>
      </div>
    </footer>
  );
}
