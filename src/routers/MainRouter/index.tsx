import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import MainTemplate from "../../templates/MainTemplate";
import { Home } from "../../pages/PagesMember/Home";
import { Profile } from "../../pages/PagesMember/Profile";
import { Essays } from "../../pages/PagesMember/Essays";
import { EssayUpload } from "../../pages/PagesMember/EssayUpload";
import { Calendar } from "../../pages/PagesMember/Calendar";
import { Support } from "../../pages/PagesMember/Support";
import { PrivateRoute } from "../PrivateRouter";
import { AdminRoute } from "../AdminRouter";
import { AdminSetupRoutes } from "../AdminSetupRoutes";
import { useAuth } from "../../hooks/useAuth";
import { Models } from "../../pages/PagesMember/Models";

export function MainRouter() {
  const { state } = useAuth();
  
  const isAdmin = state.user?.role === "admin" ? true : false;

  return (
    <BrowserRouter>
      <Routes>
        {/* rotas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* rotas privadas (membros) */}
        <Route element={<PrivateRoute isAuth={state.isAuthenticated}
        loading={state.loading} />}>
          <Route element={<MainTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/my-essays" element={<Essays />} />
            <Route path="/essay-upload" element={<EssayUpload />} />
            <Route path="/models" element={<Models />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/support" element={<Support />} />
          </Route>

          {/* admin setup */}
          <Route element={
            <AdminRoute isAdmin={isAdmin} />
          }>
            {AdminSetupRoutes()}
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}