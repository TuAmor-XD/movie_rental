document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("movieForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const rentalPeriod = document.getElementById("rentalPeriod").value.trim();
    const rentalPrice = document.getElementById("rentalPrice").value.trim();

    if (!title || !rentalPeriod || !rentalPrice) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/movie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          rentalPeriod: Number(rentalPeriod),
          rentalPrice: parseFloat(rentalPrice)
        })
      });

      const data = await response.json();

      if (data.movieid) {
        document.getElementById("movieId").value = data.movieid; // Auto-fill Movie ID
      }

      document.getElementById("message").innerText = data.message || `Movie added with ID: ${data.movieid}`;
    } catch (err) {
      console.error(err);
      document.getElementById("message").innerText = "Error adding movie";
    }
  });
});
