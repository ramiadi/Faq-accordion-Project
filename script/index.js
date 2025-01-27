const detailsEls = document.querySelectorAll("details");

detailsEls.forEach((detailsEl) => {
  const summaryEl = detailsEl.querySelector(".summary-el");
  const img = summaryEl.querySelector(".change-image");

  detailsEl.addEventListener("toggle", () => {
    if (detailsEl.open) {
      img.src = "assets/images/icon-minus.svg"; // Image for open state
      img.alt = "Minus icon";
    } else {
      img.src = "assets/images/icon-plus.svg"; // Image for closed state
      img.alt = "Plus icon";
    }
  });
});
