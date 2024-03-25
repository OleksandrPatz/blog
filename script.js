document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closePopupButton = document.querySelector(".popup__close");
  const bookNow = document.querySelector(".btn-book");
  const bookTour = document.querySelectorAll(".btn-book-tour");
  const navItems = document.querySelectorAll(".side-nav__item");

  function showPopup() {
    popup.style.display = "flex"; // Make sure the popup is displayed before starting the animation
    setTimeout(() => {
      popup.classList.add("popup--active");
    }, 10); // A small delay to ensure the display: flex takes effect
  }

  function hidePopup() {
    const content = popup.querySelector(".popup__content");
    content.style.transform = "scale(0.1)";
    content.style.opacity = "1";
    setTimeout(() => {
      popup.classList.remove("popup--active");
      setTimeout(() => {
        content.style.transition = "none";
        // Trigger reflow
        content.offsetHeight;
        content.style.transition = "";
        content.style.transform = "";
        content.style.opacity = "";
        popup.style.display = "none"; // Hide the popup after the animations
      }, 500); // This delay should match the duration of the scale down animation
    }, 500); // Match the duration of the content scale animation
  }
  if (bookNow)
    bookNow.addEventListener("click", (e) => {
      e.preventDefault(); // Prevents any form submission or navigation
      showPopup();
    });
  if (bookTour)
    bookTour.forEach((bookTour) => {
      bookTour.addEventListener("click", (e) => {
        e.preventDefault(); // Prevents any form submission or navigation
        showPopup();
      });
    });

  closePopupButton.addEventListener("click", hidePopup);

  // Phone number validation
  document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", () => {
      let numbers = phoneInput.value.replace(/\D/g, "");
      phoneInput.value = numbers;
    });
  });

  // Active links
  document.addEventListener("click", () => {
    // Get all side-nav__item elements

    // Add click event listener to each item
    navItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        // Prevent the default link behavior
        event.preventDefault();

        // Remove side-nav__item-active class from all items
        navItems.forEach((i) => {
          i.classList.remove("side-nav__item-active");
        });

        // Add side-nav__item-active class to the clicked item
        item.classList.add("side-nav__item-active");
      });
    });
  });
});
