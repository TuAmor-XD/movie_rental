document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rentForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const customerId = document.getElementById("customerId").value.trim();
    const movieId = document.getElementById("movieId").value.trim();

    if (!customerId || !movieId) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/rent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: Number(customerId),
          movieId: Number(movieId)
        })
      });

      const data = await response.json();

      document.getElementById("message").innerText = data.message || "Movie rented successfully!";
    } catch (err) {
      console.error(err);
      document.getElementById("message").innerText = "Error renting movie";
    }
  });
});
