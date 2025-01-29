
  // Create Product modal to ADD Category Modal End................
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".newcategory");
    const openModalBtn = document.querySelector(".newcategory-open"); 
    const closeModalBtn = modal.querySelector(".newcategory-close");
  
    // Open Modal
    openModalBtn.addEventListener("click", () => {
      modal.classList.add("show");
    });
  
    // Close Modal
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  
    // Close Modal when clicking outside the modal content
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  });
  
  // Create Product modal to ADD Category Modal End................

  // Create Product modal to ADD Sub Category Modal End................
  document.addEventListener("DOMContentLoaded", () => {
    const categoryModal = document.querySelector(".subnewcategory");
    const openCategoryModalBtn = document.querySelector(".subnewcategory-open"); // Button to open the modal
    const closeCategoryModalBtn = categoryModal.querySelector(".subnewcategory-close");
  
    // Open Modal
    if (openCategoryModalBtn) {
      openCategoryModalBtn.addEventListener("click", () => {
        categoryModal.classList.add("show");
      });
    }
  
    // Close Modal
    closeCategoryModalBtn.addEventListener("click", () => {
      categoryModal.classList.remove("show");
    });
  
    // Close Modal when clicking outside the modal content
    categoryModal.addEventListener("click", (event) => {
      if (event.target === categoryModal) {
        categoryModal.classList.remove("show");
      }
    });
  });
  
  // Create Product modal to ADD sub Category Modal End................