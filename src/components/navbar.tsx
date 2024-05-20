import { Link } from "react-router-dom";
import Button from "../components/button";
import { ReactNode } from "react";

function Section({ children }: { children?: ReactNode }) {
  return (
    <section className="m-2 md:m-4 flex justify-center items-center gap-4">
      {children}
    </section>
  );
}

function Navbar() {
  return (
    <nav className="fixed z-[2] top-0 w-screen h-16 bg-[#111] mb-2">
      <div className="h-full flex justify-center md:justify-between items-center">
        <Section>
          <Link to="/">
            <img
              src="/logo.svg"
              className="h-8 w-8 rounded-lg align-middle transition-all duration-200 hover:scale-90"
            />
          </Link>
          <Link to="/" className="hidden md:inline-block">
            <Button>
              <i className="fa-solid fa-house"></i> Home
            </Button>
          </Link>
          <Link to="/games">
            <Button>
              <i className="fa-solid fa-gamepad"></i> Games
            </Button>
          </Link>
        </Section>
        <Section>
          <Link to="/socials">
            <Button>
              <i className="fa-solid fa-user"></i> Socials
            </Button>
          </Link>
        </Section>
      </div>
    </nav>
  );
}

export default Navbar;
