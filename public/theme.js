(function () {
  try {
    var storedTheme = localStorage.getItem("hexa-theme");
    var theme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
