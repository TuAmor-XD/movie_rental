document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("customerForm");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const firstname = document.getElementById("fname").value.trim();
    const lastname = document.getElementById("lname").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!firstname || !lastname || !phone) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, phone })
      });

      const data = await response.json();

      if (data.customerid) {
        document.getElementById("customerId").value = data.customerid;
      }

      document.getElementById("message").innerText = data.message || `Customer added with ID: ${data.customerid}`;
    } catch (err) {
      console.error(err);
      document.getElementById("message").innerText = "Error adding customer";
    }
  });
});
