import sun from "../assets/images/sun.svg";
import moon from "../assets/images/moon.svg";
export default function Toggle ({ isDark, toggleTheme }) {
  const btnToggle = isDark ? (
    <img src={ sun } className="icon-nav " alt="Light mode" />
  ) : (
    <img src={ moon } className="icon-nav " alt="Dark mode" />
  );
  return (
    <button onClick={ toggleTheme } className="toggle-btn">
      { btnToggle }
    </button>
  );
}
