const uploadModal = document.querySelectorAll(".uplade-button");
const uploadModalContainer = document.getElementById("upload-container");
const uploadModalClose = document.getElementById("upload-close");
uploadModal.forEach((modal) => {
  modal.addEventListener("click", () => {
    uploadModalContainer.classList.toggle("upload-container-active");
  });
});
uploadModalClose.addEventListener("click", () => {
  uploadModalContainer.classList.toggle("upload-container-active");
});
