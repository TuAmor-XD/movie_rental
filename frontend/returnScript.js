document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("returnForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const movieId = document.getElementById("movieId").value.trim();

    if (!movieId) {
      alert("Please enter a movie ID!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/return", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movieId: Number(movieId) })
      });

      const data = await response.json();

      document.getElementById("message").innerText = data.message || "Movie returned successfully!";
    } catch (err) {
      console.error(err);
      document.getElementById("message").innerText = "Error returning movie";
    }
  });
});
