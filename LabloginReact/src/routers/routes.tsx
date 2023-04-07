import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "../pages/Users/userLogin";
import HomeView from "../pages/Home";
import UserRegister from "../pages/Users/userRegister";

function PublicRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/register" element={<UserRegister/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PublicRoutes;