document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closePopupButton = document.querySelector(".popup__close");
  const bookNow = document.querySelector(".btn-book");
  const bookTour = document.querySelectorAll(".btn-book-tour");
  const navItems = document.querySelectorAll(".side-nav__item");

  // Function to show the popup
  function showPopup() {
    popup.style.display = "flex";
    setTimeout(() => popup.classList.add("popup--active"), 10);
  }

  // Function to hide the popup
  function hidePopup() {
    popup.classList.remove("popup--active");
    setTimeout(() => (popup.style.display = "none"), 500); // Wait for the animation to finish
  }

  // Event listeners for opening the popup
  if (bookNow) {
    bookNow.addEventListener("click", (e) => {
      e.preventDefault();
      showPopup();
    });
  }

  bookTour.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showPopup();
    });
  });

  // Event listener for closing the popup
  closePopupButton.addEventListener("click", hidePopup);

  // Event listeners for phone number validation
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "");
    });
  }

  // Handling navigation item clicks
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((i) => i.classList.remove("side-nav__item-active"));
      item.classList.add("side-nav__item-active");
    });
  });
});
