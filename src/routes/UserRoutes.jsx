
import AboutMePage from "components/about";
import CertificationPage from "components/certification";
import ContactsPage from "components/contacts";
import EducationPage from "components/education";
import ExperiencePage from "components/experience";
import HomePage from "components/home";
import DrawerAppBar from "components/layout/drawer";
import PortfolioPage from "components/portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function UserRoutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={
                        <DrawerAppBar />
                    }
                >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutMePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    {/* <Route path="/certification" element={<CertificationPage />} /> */}
                    <Route path="/education" element={<EducationPage />} />
                    <Route path="/contact" element={<ContactsPage />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
