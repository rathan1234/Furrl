import { useEffect } from "react";
import "./index.css";

const Navbar = () => {
  let lastScrollTop = 0;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("nav");
      let scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.style.top = "-100px";
      } else {
        navbar.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <nav className="nav-bar" id="nav">
      <img src="/assets/furrl.svg" alt="Furrl" />
      <div className="nav-icons-container">
        <a className="nav-bar-icons" href="https://furrl.in/wishlist">
          <img src="/assets/wishlist.svg" alt="wishlist" />
        </a>
        <a className="nav-bar-icons" href="https://furrl.in/cart">
          <img src="/assets/cart.svg" alt="cart" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
