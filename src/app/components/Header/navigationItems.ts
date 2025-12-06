export interface NavigationItem {
  id: string;
  label: string;
  sectionId: string;
}

export const navigationItems: NavigationItem[] = [
  { id: "catalog", label: "каталог", sectionId: "catalog" },
  { id: "about", label: "о компании", sectionId: "about" },
  { id: "contacts", label: "контакты", sectionId: "contacts" },
  { id: "download", label: "скачать каталог", sectionId: "catalog" },
];

