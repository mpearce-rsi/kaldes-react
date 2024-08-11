export interface NavLinkProps {
  text: string;
  route: string;
  key: string;
}

export const navLinkStatic: NavLinkProps[] = [
  { text: "Why Use Kaldes?", route: "/about", key: "about" },
  { text: "Partners", route: "/partners", key: "partners" },
  { text: "Media", route: "/media", key: "media" },
  { text: "Application Form", route: "/apply", key: "apply" },
  { text: "Contact", route: "/contact", key: "contact" },
  { text: "Lenders Click Here", route: "/lenders", key: "lenders" },
];
