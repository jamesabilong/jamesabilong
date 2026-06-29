import { useEffect, useRef, useState } from "react";
import { NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { routes, resumePath } from "../lib/routes";
import { useTheme } from "../lib/useTheme";
import { ThemeToggle } from "./ThemeToggle";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <>
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="James Abilong home">
          <span className="brand-mark">JA</span>
          <span>James Abilong</span>
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className={`site-nav ${isMenuOpen ? "open" : ""}`} aria-label="Primary navigation">
          {routes
            .filter((route) => route.path !== "/")
            .map((route) => (
              <NavLink key={route.path} to={route.path}>
                {route.label}
              </NavLink>
            ))}
          <a className="nav-resume" href={resumePath} download>
            Resume
          </a>
        </nav>
      </header>

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <main ref={mainRef} id="app" tabIndex={-1}>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>James Abilong</span>
        <span>Full-stack developer building reliable web applications.</span>
      </footer>
    </>
  );
}
