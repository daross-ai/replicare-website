document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });
  }

  document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const firstName = data.get("first-name") || "";
      const lastName = data.get("last-name") || "";
      const email = data.get("email") || "";
      const phone = data.get("phone") || "";
      const jobTitle = data.get("job-title") || "";
      const subject = data.get("subject") || "Replicare inquiry";
      const message = data.get("message") || "";
      const body = [
        `Name: ${firstName} ${lastName}`.trim(),
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Job title: ${jobTitle}`,
        "",
        "Message:",
        message
      ].join("\n");
      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Opening your email app with a prepared draft.";
      }
      window.location.href = `mailto:hello@replicareai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
});
