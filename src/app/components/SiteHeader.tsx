import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#education", label: "Education", wideOnly: true },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills", wideOnly: true },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-accent px-3 py-2 text-sm font-semibold text-black focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        >
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-widest text-white"
            aria-label="Tyler Arista, home"
          >
            T<span className="text-accent">.</span>A
          </Link>
          <ul className="flex items-center gap-4 text-sm sm:gap-6">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={link.wideOnly ? "hidden md:block" : ""}
              >
                <Link
                  href={link.href}
                  className="text-muted transition-colors hover:text-accent-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
