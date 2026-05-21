function searchRecommendation() {

  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const results = document.getElementById("results");

  if(input.includes("beach")){

    results.innerHTML = `

      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200">
        <h3>Maldives Beach</h3>
      </div>

      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200">
        <h3>Bora Bora Beach</h3>
      </div>

    `;
  }

  else if(input.includes("temple")){

    results.innerHTML = `

      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200">
        <h3>Temple in Thailand</h3>
      </div>

      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200">
        <h3>Ancient Temple</h3>
      </div>

    `;
  }

  else if(input.includes("country")){

    results.innerHTML = `

      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200">
        <h3>France</h3>
      </div>

      <div class="result-card">
        <img src="https://images.unsplash.com/photo-1526481280695-3c4691f241ac?q=80&w=1200">
        <h3>Japan</h3>
      </div>

    `;
  }

  else{

    results.innerHTML = `
      <h2>No recommendations found.</h2>
    `;
  }
}