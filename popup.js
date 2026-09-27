const api = globalThis.browser ?? globalThis.chrome;
const toggle = document.querySelector("#toggle");
const status = document.querySelector("#status");

function render(enabled) {
  toggle.checked = enabled;
  status.textContent = enabled ? "เปิดใช้งานบน BiliBili" : "ปิดใช้งาน";
}

api.storage.local.get({ darkMode: true }).then(({ darkMode }) => render(darkMode));

toggle.addEventListener("change", () => {
  const darkMode = toggle.checked;
  render(darkMode);
  api.storage.local.set({ darkMode });
});
