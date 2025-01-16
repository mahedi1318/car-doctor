import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { Children } from "react";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import RegisterPage from "../auth/Register/RegisterPage";
import LoginPage from "../auth/Login/LoginPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/service",
                element: <ServicePage />
            },
            {
                path: "/blog",
                element: <BlogPage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
        ]
    },
    
])


export default router;