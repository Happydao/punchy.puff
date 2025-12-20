const copyButton = document.getElementById("copy-ca");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const ca = copyButton.dataset.ca;
    try {
      await navigator.clipboard.writeText(ca);
      showToast("Contract address copied");
    } catch (err) {
      showToast("Copy failed");
    }
  });
}

const animatedSections = document.querySelectorAll("[data-animate]");

if (animatedSections.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedSections.forEach((section) => observer.observe(section));
} else {
  animatedSections.forEach((section) => section.classList.add("in-view"));
}
