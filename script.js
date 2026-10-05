// Small JavaScript interaction for the portfolio.
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector("footer p");
  if (footer) footer.textContent = `© ${year} Raveesh B M • Student Portfolio`;
});
