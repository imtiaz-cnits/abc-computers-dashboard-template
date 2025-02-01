

// Sign in And Sign up Start.......
function switchCard() {
  const loginCard = document.querySelector(".container .card:nth-child(1)");
  const registerCard = document.querySelector(".container .card:nth-child(2)");

  if (loginCard.style.display === "none") {
    loginCard.style.display = "block";
    registerCard.style.display = "none";
  } else {
    loginCard.style.display = "none";
    registerCard.style.display = "block";
  }
}
// Sign in And Sign up End.....................

// Filter Select Search Box Js Start................................................................
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".select-box-dropdown");

  dropdowns.forEach(function (dropdown) {
    const dropdownSelected = dropdown.querySelector(
      ".select-dropdown-selected"
    );
    const dropdownItems = dropdown.querySelector(".select-dropdown-items");
    const searchBox = dropdown.querySelector(".select-search-box");
    const icon = dropdown.querySelector(".icon i");

    // Function to toggle visibility of search box based on number of items
    function toggleSearchInput() {
      const itemCount = dropdownItems.querySelectorAll(".option").length;
      if (itemCount >= 4) {
        searchBox.style.display = "block";
      } else {
        searchBox.style.display = "none";
      }
    }

    // Function to position the dropdown dynamically
    function positionDropdown() {
      const rect = dropdown.getBoundingClientRect(); // Get the position of the dropdown container
      const dropdownHeight = dropdownItems.offsetHeight;
      const spaceBelow = window.innerHeight - rect.bottom; // Space below the dropdown
      const spaceAbove = rect.top; // Space above the dropdown

      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        // If not enough space below, position the dropdown above
        dropdownItems.style.bottom = `${rect.height}px`; // Place above, accounting for the selected height
        dropdownItems.style.top = "auto";
      } else {
        // Otherwise, position the dropdown below
        dropdownItems.style.top = "100%";
        dropdownItems.style.bottom = "auto";
      }
    }

    // Toggle dropdown visibility
    dropdownSelected.addEventListener("click", function (e) {
      e.stopPropagation();

      // Close all other dropdowns
      dropdowns.forEach(function (otherDropdown) {
        if (otherDropdown !== dropdown) {
          otherDropdown
            .querySelector(".select-dropdown-items")
            .classList.remove("show");
          otherDropdown
            .querySelector(".icon i")
            .classList.remove("fa-angle-up");
          otherDropdown.querySelector(".icon i").classList.add("fa-angle-down");
        }
      });

      // Toggle current dropdown visibility
      dropdownItems.classList.toggle("show");

      // Toggle icon rotation
      if (dropdownItems.classList.contains("show")) {
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
      } else {
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
      }

      // Call function to toggle search input visibility
      toggleSearchInput();

      // Position the dropdown based on available space
      if (dropdownItems.classList.contains("show")) {
        positionDropdown();
      }
    });

    // Filter dropdown items based on search
    searchBox.addEventListener("input", function () {
      const filter = searchBox.value.toLowerCase();
      const items = dropdownItems.querySelectorAll(".option");

      items.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });

    // Close the dropdown if clicked outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".select-box-dropdown")) {
        dropdownItems.classList.remove("show");
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
        searchBox.style.display = "none";
      }
    });

    // Select dropdown item
    dropdownItems.addEventListener("click", function (e) {
      if (e.target.tagName === "OPTION") {
        dropdownSelected.querySelector("span").textContent =
          e.target.textContent;
        dropdownItems.classList.remove("show");
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
        searchBox.style.display = "none";
      }
    });
  });
});
// Filter Select Search Box Js End........................................................

// Income, Expenses Payment Function JS Start..............................................

// Toggle Dropdown Function
function toggleDropdown(event) {
  const dropdown = event.target.closest(".dropdown");
  const isActive = dropdown.classList.contains("active");

  // Close all open dropdowns except the bank-container
  document.querySelectorAll(".dropdown").forEach((d) => {
    // Skip closing the bank-container
    if (!d.closest("#bank-container")) {
      d.classList.remove("active");
    }
  });

  // Toggle the clicked dropdown
  if (!isActive) {
    dropdown.classList.add("active");
  }
}

// Close all dropdowns when clicking outside, except for bank-container
window.addEventListener("click", function (event) {
  if (
    !event.target.closest(".dropdown-container") &&
    !event.target.closest(".dropdown-main")
  ) {
    document
      .querySelectorAll(".dropdown-main")
      .forEach((d) => d.classList.remove("active"));
  }
});

// Prevent closing bank-container dropdown when clicking inside it
document
  .getElementById("bank-container")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from bubbling up
  });

// Show Bank Container on "Bank" Click and ensure it's always open
document.getElementById("bank").addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent closing the main dropdown
  const bankContainer = document.getElementById("bank-container");
  bankContainer.style.display = "flex"; // Always open
  document.getElementById("bkash-container").style.display = "none"; // Hide Bkash container
  // Close all other dropdowns
  document.querySelectorAll(".dropdown").forEach((d) => {
    if (!d.closest("#bank-container")) {
      d.classList.remove("active");
    }
  });
});

// Handle click on input field inside bank-container to activate the dropdown
document.querySelectorAll("#bank-container .input").forEach((input) => {
  input.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent closing the dropdown on click
    const dropdown = input.closest(".dropdown");
    if (!dropdown.classList.contains("active")) {
      dropdown.classList.add("active"); // Make sure the dropdown is active
    }
  });
});

// Show Bkash Container on "Bkash" Click
document.getElementById("bkash").addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent closing the main dropdown
  const bkashContainer = document.getElementById("bkash-container");
  const isVisible = bkashContainer.style.display === "flex";

  // Only show/hide the Bkash container when the input is not clicked
  if (!event.target.closest(".input")) {
    bkashContainer.style.display = isVisible ? "none" : "flex";
    document.getElementById("bank-container").style.display = "none"; // Hide Bank container
  }
});

// Handle Click on Option in Dropdown
document.querySelectorAll(".options option").forEach((option) => {
  option.addEventListener("click", function () {
    // Set the value of the main input to the clicked option
    const mainInput = option.closest(".dropdown").querySelector("input");
    mainInput.value = option.textContent;
  });
});

// Allow typing in the input field (inside .bank-container) to prevent closing
document.querySelectorAll(".dropdown input").forEach((input) => {
  input.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent closing the dropdown when clicking the input
  });
});

// Filter Options Function
function filterOptions(event, optionsId) {
  const searchQuery = event.target.value.toLowerCase();
  const optionsContainer = document.getElementById(optionsId);
  const options = optionsContainer.querySelectorAll("option");

  // Loop through all options and hide those that do not match the search query
  options.forEach((option) => {
    const optionText = option.textContent.toLowerCase();
    if (optionText.includes(searchQuery)) {
      option.style.display = "block"; // Show the option if it matches
    } else {
      option.style.display = "none"; // Hide the option if it does not match
    }
  });
}

// Handle Submit Button Click
document.getElementById("submit").addEventListener("click", function () {
  // Close all dropdowns
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.classList.remove("active");
  });

  // Optionally, hide the bank-container
  document.getElementById("bank-container").style.display = "none";
  document.getElementById("bkash-container").style.display = "none";
});

// Income, Expenses Payment Function JS End..............................................
