import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import MainTemplate from "../../templates/MainTemplate";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { Profile } from "../../pages/PagesMember/Profile";
import { Main } from "../../pages/Main";
import { Home } from "../../pages/PagesMember/Home";
import { Essays } from "../../pages/PagesMember/Essays";
import { Calendar } from "../../pages/PagesMember/Calendar";
import { Support } from "../../pages/PagesMember/Support";
import { Model } from "../../pages/PagesMember/Model";

export function MainRouter() {
    const isauth = true;

    return (
        <BrowserRouter>
            <Routes>
                {/* rotas publicas */}
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* rotas privadas */}
                <Route element={isauth ? <MainTemplate /> : <Navigate to="/login" />}>
                    { /* paginas de membro */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/my-essays" element={<Essays />} />
                    <Route path="/my-models" element={<Model />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/support" element={<Support />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}