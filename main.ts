const menuToggle = document.querySelector<HTMLButtonElement>("#menuToggle");
const navLinks = document.querySelector<HTMLDivElement>("#navLinks");
const contactForm = document.querySelector<HTMLFormElement>("#contactForm");
const formFeedback = document.querySelector<HTMLParagraphElement>("#formFeedback");
const yearElement = document.querySelector<HTMLElement>("#year");

if (yearElement) yearElement.textContent = String(new Date().getFullYear());

function closeMenu(): void {
  navLinks?.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
  const icon = menuToggle?.querySelector("i");
  if (icon) icon.setAttribute("data-lucide", "menu");
  refreshIcons();
}

function refreshIcons(): void {
  // Lucide replaces the data-lucide placeholders with accessible SVG icons.
  if (typeof window !== "undefined" && "lucide" in window) {
    const lucideApi = (window as Window & { lucide?: { createIcons: () => void } }).lucide;
    lucideApi?.createIcons();
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  const icon = menuToggle.querySelector("i");
  if (icon) icon.setAttribute("data-lucide", isOpen ? "x" : "menu");
  refreshIcons();
});

navLinks?.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.querySelectorAll<HTMLAnchorElement>("[data-project]").forEach((link) => {
  link.addEventListener("click", () => {
    const projectName = link.dataset.project;
    const serviceSelect = document.querySelector<HTMLSelectElement>("#service");
    const messageField = document.querySelector<HTMLTextAreaElement>("#message");
    if (serviceSelect) serviceSelect.value = "Something else";
    if (messageField && projectName && !messageField.value.trim()) {
      messageField.value = `I'm interested in discussing a project similar to ${projectName}.`;
    }
  });
});

contactForm?.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const subject = encodeURIComponent(`Freelance enquiry: ${service}`);
  const body = encodeURIComponent(
    `Hi Abiramy,\n\nMy name is ${name} (${email}).\n\nI'm interested in: ${service}\n\nProject details:\n${message}\n\nBest regards,\n${name}`
  );

  if (formFeedback) {
    formFeedback.textContent = "Your email app should open with the enquiry prepared. Please review and send it there.";
  }
  window.location.href = `mailto:thiyaku.abiramy@gmail.com?subject=${subject}&body=${body}`;
});

refreshIcons();
