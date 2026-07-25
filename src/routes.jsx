
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

export default function WebRoutes() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Homepage />
                        </Layout>
                    }
                />
                <Route path="*" element={
                    <Layout>
                        <NotFound />
                    </Layout>
                } />
            </Routes>
        </Router>
    )
}

const Layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

