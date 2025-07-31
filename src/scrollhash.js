// components/ScrollToHashElement.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1); // "#contact" → "contact"
            const el = document.getElementById(id);
            if (el) {
                // DOM tayyor bo'lishi uchun biroz kutish
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [location]);

    return null;
}
