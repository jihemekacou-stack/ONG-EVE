import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Domains from "./pages/Domains";
import Contact from "./pages/Contact";
import Report from "./pages/Report";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "domains", element: <Domains /> },
      { path: "contact", element: <Contact /> },
      { path: "report", element: <Report /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      // Fallback routes for unbuilt pages
      { path: "partners", element: <div className="py-32 text-center"><h1 className="text-3xl font-display font-bold text-secondary">Devenir Partenaire (En cours de développement)</h1></div> },
      { path: "volunteer", element: <div className="py-32 text-center"><h1 className="text-3xl font-display font-bold text-secondary">Devenir Bénévole (En cours de développement)</h1></div> },
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
