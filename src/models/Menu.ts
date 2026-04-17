import type { IconName } from "pages/PagesAdmin/AdminSetup/MenuBuilder";

export interface Menu {
  id: string;
  name: string; 
  icon: IconName;
  route: string;
  order?: number;
}

export interface MenuUpdateDto {
  name: string;
  icon: string;
}