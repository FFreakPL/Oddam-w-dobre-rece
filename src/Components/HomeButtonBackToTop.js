import React, { useState, useEffect} from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default function HomeButtonBackToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const info = document.querySelector('.info');

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 90) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="backToTop">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="backToTop_icon"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
}