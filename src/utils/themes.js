const themes = ["theme-light", "theme-dark"];

function setTheme({ setClassName }) {
  themes.map(theme =>
    localStorage.setItem(theme, JSON.stringify(setClassName))
  );
}

function getTheme() {}

// function keepTheme(setClassName) {
//   const theme = localStorage.getItem('theme');
//   if (theme) {
//     setTheme(theme, setClassName);
//     return;
//   }

//   const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)');
//   if (prefersLightTheme.matches) {
//     setTheme('theme-light', setClassName);
//     return;
//   }

//   setTheme('theme-dark', setClassName);
// }

export { setTheme, keepTheme };
