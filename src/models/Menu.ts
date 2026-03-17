import type { IconName } from "pages/PagesAdmin/AdminSetup/MenuBuilder";

export interface Menu {
  id: string;
  label: string; 
  iconName: IconName;
  route: string;
}