document.addEventListener("DOMContentLoaded", () => {
  // Navigate to pages on button click
  document.getElementById("btnAddCustomer").addEventListener("click", () => {
    window.location.href = "addCustomer.html";
  });

  document.getElementById("btnAddMovie").addEventListener("click", () => {
    window.location.href = "addMovie.html";
  });

  document.getElementById("btnRentMovie").addEventListener("click", () => {
    window.location.href = "rentMovie.html";
  });

  document.getElementById("btnReturnMovie").addEventListener("click", () => {
    window.location.href = "returnMovie.html";
  });
});
