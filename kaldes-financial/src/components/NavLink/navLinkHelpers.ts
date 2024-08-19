export interface NavLinkProps {
  text: string;
  route: string;
  keyText: string;
}

export const navLinkStatic: NavLinkProps[] = [
  { text: "Why Use Kaldes?", route: "/about", keyText: "about" },
  { text: "Partners", route: "/partners", keyText: "partners" },
  { text: "Media", route: "/media", keyText: "media" },
  { text: "Application Form", route: "/apply", keyText: "apply" },
  { text: "Contact", route: "/contact", keyText: "contact" },
  { text: "Lenders Click Here", route: "/lenders", keyText: "lenders" },
];
