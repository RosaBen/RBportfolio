import { useState } from "react";
import "../styles/toggle.css";
// import { setTheme } from '../utils/themes'

export default function Toggle({ setClassName }) {
  const darkLabel = "color mode toggle, dark mode";
  const lightLabel = "color mode toggle, light mode";

  const [active, setActive] = useState(false);
  const [ariaActive, setAriaActive] = useState(true);
  const [ariaLabel, setAriaLabel] = useState(darkLabel);
  // const theme = localStorage.getItem('theme')

  const changeTheme = () => {
    if (localStorage.getItem("theme" === "theme-dark")) {
      setTheme("theme-light", setClassName);
      setActive(true);
      setAriaActive(false);
      setAriaLabel(lightLabel);
    } else {
      setTheme("theme-dark", setClassName);
      setActive(false);
      setAriaActive(true);
      setAriaLabel(darkLabel);
    }
  };

  const handleOnToggle = () => {
    changeTheme();
  };

  const handleKeyPress = e => {
    if (e.code === "Enter") {
      changeTheme;
    }
  };

  // useEffect(()=>{
  //   if(theme === 'theme-dark'){
  //     setActive(false)
  //     setAriaActive(true)
  //     setAriaLabel(darkLabel)
  //   }else if(theme === 'theme-light'){
  //     setActive(true)
  //     setAriaActive(false)
  //     setAriaLabel(lightLabel)
  //   }
  // },[theme])

  return (
    <div className="container--toggle" title="color mode toggle">
      <input
        role="switch"
        aria-checked={ariaActive}
        onKeyDown={handleKeyPress}
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
        onClick={handleOnToggle}
        checked={active}
        readOnly
      />
      <label htmlFor="toggle" className="toggle--label" aria-label={ariaLabel}>
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
}
