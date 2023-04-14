import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "../pages/Users/userLogin";
import HomeView from "../pages/Home";
import UserRegister from "../pages/Users/userRegister";
import UserWebs from "../pages/UserWebs/userWebs";

function PublicRoutes() {
    let idUser = sessionStorage.getItem('idUser');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView/>}/>
                <Route path="/home" element={<HomeView/>}/>
                <Route path="/login" element={<UserLogin/>}/>
                <Route path="/register" element={<UserRegister/>}/>
                <Route path="/newProduct" element={<UserWebs/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PublicRoutes;