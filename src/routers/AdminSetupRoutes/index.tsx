import { Route } from "react-router";
import AdminSetupTemplate from "../../templates/AdminSetupTemplate";
import { SetupHome } from "../../pages/PagesAdmin/AdminSetup/SetupHome";
import { MenuBuilder } from "../../pages/PagesAdmin/AdminSetup/MenuBuilder";
import { ProfileBuilder } from "../../pages/PagesAdmin/AdminSetup/ProfileBuilder";
import ModelsEssay from "../../pages/PagesAdmin/AdminSetup/ModelsEssay";
import { Categories } from "pages/PagesAdmin/AdminSetup/Categories";

export function AdminSetupRoutes() {
  return (
    <Route path="/admin/setup" element={<AdminSetupTemplate />}>
      <Route index element={<SetupHome />} />
      <Route path="menus" element={<MenuBuilder />} />
      <Route path="profiles" element={<ProfileBuilder />} />
      <Route path="categories" element={<Categories />} />
      <Route path="reference-essay" element={<ModelsEssay />} />
    </Route>
  );
}
