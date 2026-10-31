import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { socials } from "../content";

const footerLinks = [
  { href: socials.github, label: "GitHub", icon: FaGithub },
  { href: socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: socials.instagram, label: "Instagram", icon: FaInstagram },
  { href: socials.twitter, label: "X (Twitter)", icon: FaSquareXTwitter },
  { href: socials.email, label: "Email", icon: FiMail },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} Tyler Arista
        </p>
        <ul className="flex items-center gap-5 text-xl">
          {footerLinks.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="text-muted transition-colors hover:text-accent-soft"
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
