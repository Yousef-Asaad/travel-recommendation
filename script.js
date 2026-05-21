function searchRecommendation() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  localStorage.setItem("searchKey", input);

  window.location.href = "results.html";
}


// ده يشتغل فقط في صفحة النتائج
document.addEventListener("DOMContentLoaded", function () {
  const input = localStorage.getItem("searchKey");
  const results = document.getElementById("results");

  if (!results) return; // لو مش في results.html

  if (!input) {
    results.innerHTML = "<p>No search data found</p>";
    return;
  }

  let html = "";

  if (input.includes("beach")) {
    html = `
      <h2>Beach Results</h2>
      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e">
        <h3>Maldives Beach</h3>
      </div>

      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98">
        <h3>Bora Bora Beach</h3>
      </div>
    `;
  }

  else if (input.includes("temple")) {
    html = `
      <h2>Temple Results</h2>
      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da">
        <h3>Temple Thailand</h3>
      </div>

      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1548013146-72479768bada">
        <h3>Ancient Temple</h3>
      </div>
    `;
  }

else if (input.includes("country")) {
  html = `
    <h2>Country Results</h2>

    <div class="result-card">
      <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop">
      <h3>France</h3>
    </div>

    <div class="result-card">
      <img src="https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?w=800&auto=format&fit=crop">
      <h3>Japan</h3>
    </div>
  `;
}

  else {
    html = "<p>No results found</p>";
  }

  results.innerHTML = html;
});