import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import MainTemplate from "../../templates/MainTemplate";
import { Home } from "../../pages/PagesMember/Home";
import { Profile } from "../../pages/PagesMember/Profile";
import { Essays } from "../../pages/PagesMember/Essays";
import { EssayUpload } from "../../pages/PagesMember/EssayUpload";
import { Support } from "../../pages/PagesMember/Support";
import { AdminRoute } from "../AdminRouter";
import { AdminSetupRoutes } from "../AdminSetupRoutes";
import { Models } from "../../pages/PagesMember/Models";
import NotFound from "pages/NotFound";
import { CorrectEssay } from "pages/PagesReviewer/CorrectEssay";
import { MemberRoute } from "routers/MemberRouter";
import { ProfileType } from "models/Profile";
import { ForgotPassword } from "pages/ForgotPassword";
import { ResetPassword } from "pages/ResetPassword";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />

         {/* Rotas de estudante e corretor */}
        <Route element={<MemberRoute allowedProfile={[ProfileType.STUDENT, ProfileType.CORRECTOR]} />}>
          <Route element={<MainTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/support" element={<Support />} />
          </Route>
        </Route>

        {/* Rotas de estudante */}
        <Route element={<MemberRoute allowedProfile={[ProfileType.STUDENT]} />}>
          <Route element={<MainTemplate />}>
            <Route path="/my-essays" element={<Essays />} />
            <Route path="/essay-upload" element={<EssayUpload />} />
            <Route path="/models" element={<Models />} />
            <Route path="/support" element={<Support />} />
          </Route>
        </Route>

        {/* Rotas de corretor */}
        <Route element={<MemberRoute allowedProfile={[ProfileType.CORRECTOR]} />}>
          <Route element={<MainTemplate />}>
            <Route path="/essays-corrector" element={<CorrectEssay />} />
            <Route path="/essays-corrector/:id" element={<CorrectEssay />} />
          </Route>
        </Route>

        {/* Rotas de admin */}
        <Route element={<AdminRoute />}>
          {AdminSetupRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}