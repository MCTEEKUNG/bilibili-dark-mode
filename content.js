const api = globalThis.browser ?? globalThis.chrome;
let darkModeEnabled = false;

function applyDarkMode(enabled) {
  darkModeEnabled = Boolean(enabled);
  document.documentElement.classList.toggle("night-mode", darkModeEnabled);
  document.documentElement.style.colorScheme = darkModeEnabled ? "dark" : "light";
}

new MutationObserver(() => {
  if (darkModeEnabled && !document.documentElement.classList.contains("night-mode")) {
    document.documentElement.classList.add("night-mode");
  }
}).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

api.storage.local.get({ darkMode: true }).then(({ darkMode }) => applyDarkMode(darkMode));

api.storage.onChanged.addListener(changes => {
  if (changes.darkMode) applyDarkMode(changes.darkMode.newValue);
});
