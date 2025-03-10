const detailsEls = document.querySelectorAll("details");

detailsEls.forEach((detailsEl) => {
  const summaryEl = detailsEl.querySelector(".summary-el");
  const img = summaryEl.querySelector(".change-image");

  detailsEl.addEventListener("toggle", () => {
    if (detailsEl.open) {
      img.src = "assets/images/icon-minus.svg"; // Image for open state
      img.alt = "Minus icon";
      summaryEl.setAttribute("aria-expanded", "true");
    } else {
      img.src = "assets/images/icon-plus.svg"; // Image for closed state
      img.alt = "Plus icon";
      summaryEl.setAttribute("aria-expanded", "false");
    }
  });
});
