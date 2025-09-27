import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import GBLogo from "../assets/GBBlackLogo.svg";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsActive((v) => !v);
  const closeMenu = () => setIsActive(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isActive ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isActive]);

  // Smooth section navigation (hash links)
  const handleHashNav = (hash, e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // If not on home → navigate first, then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } else {
      // Already on home → just scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Update hash in URL
    window.history.replaceState(null, "", hash);

    closeMenu();
  };

  // ✅ Handle navigation for all links
  const handleNavigation = (path, e) => {
    if (path === "/") {
      e.preventDefault();
      if (location.pathname === "/") {
        // Already on home → scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Navigate to home
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
      }
      closeMenu();
    } else if (path.startsWith("#")) {
      handleHashNav(path, e);
    } else {
      // Regular page navigation (e.g., /projects)
      e.preventDefault();
      if (location.pathname === path) {
        // Already on that page → scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(path);
        // After navigation, scroll top
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
      }
      closeMenu();
    }
  };

  // ✅ Navigation links
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "#about" },
    { label: "Services", path: "#services" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "#contact" },
  ];

  return (
    <nav className="nav-bar navbar">
      <div className="nav-bar__container glass-card-border page-container">
        <div className="nav-bar__content">
          {/* Logo */}
          <Link
            to="/"
            className="nav-bar__logo"
            onClick={(e) => handleNavigation("/", e)}
            data-progress-handled="true"
          >
            <img src={GBLogo} alt="GB Creative Logo" loading="lazy" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-bar_page_links">
            {navLinks.map(({ label, path }) => (
              <li className="nav-bar_links" key={path}>
                {path.startsWith("#") ? (
                  <a href={path} onClick={(e) => handleNavigation(path, e)}>
                    {label}
                  </a>
                ) : (
                  <Link to={path} onClick={(e) => handleNavigation(path, e)}>
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div
          className={`nav-bar_menu_button ${isActive ? "is-active" : ""}`}
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          aria-label="Menu Mobile"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleMenu();
            }
          }}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>

        {/* Mobile Menu */}
        <ul className={`nav-menu_mobile ${isActive ? "is-active" : ""} bdr`}>
          {navLinks.map(({ label, path }) => (
            <li className="nav-menu_links_mobile" key={path}>
              {path.startsWith("#") ? (
                <a href={path} onClick={(e) => handleNavigation(path, e)}>
                  {label}
                </a>
              ) : (
                <Link to={path} onClick={(e) => handleNavigation(path, e)}>
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
