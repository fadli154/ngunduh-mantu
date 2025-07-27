// app/components/navbar/NavLinkList.tsx
export default function NavLinkList() {
  const links = ["info", "gallery", "gift", "rsvp"];

  return (
    <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
      {links.map((link) => (
        <li key={link}>
          <a href={`#${link}`} className="hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
