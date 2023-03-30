import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import SystemPage from "../page/SystemPage";
import  RegisterPage from "../page/RegisterPage";
import  IrrigationPage from "../page/IrrigationPage";
import UserProvider from "../context/UserProvider";
import PrivateRoutes from "./PrivateRoutes"

function AppRoutes() {
  return (
    
    <BrowserRouter>
        <UserProvider>
              <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="/login" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/system" element={<PrivateRoutes><SystemPage/></PrivateRoutes>}/>
                <Route path="/irrigation/:id" element={<PrivateRoutes><IrrigationPage /></PrivateRoutes>}/>
              </Routes>
        </UserProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
