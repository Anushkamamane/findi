document.getElementById("searchBtn").addEventListener("click", searchProducts);
document.getElementById("arButton").addEventListener("click", startAR);

function searchProducts() {
  const query = document.getElementById("searchBar").value;
  if (!query) {
    alert("Please enter a product name!");
    return;
  }

  // Simulated product data
  const products = [
    {
      name: "Mirror",
      priceXYZ: "₹1,500",
      priceABC: "₹1,450",
      details: "Round wall mirror, 20 inches diameter",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Window Glass",
      priceXYZ: "₹2,500",
      priceABC: "₹2,450",
      details: "Clear tempered glass, 40x30 inches",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Wall Frame",
      priceXYZ: "₹800",
      priceABC: "₹750",
      details: "Wooden photo frame, 12x16 inches",
      image: "https://via.placeholder.com/150"
    }
  ];

  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "productCard";
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.details}</p>
      <p>Price at XYZ Shop: <strong>${product.priceXYZ}</strong></p>
      <p>Price at ABC Stores: <strong>${product.priceABC}</strong></p>
      <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px; margin-top: 10px;">
    `;
    productList.appendChild(productCard);
  });
}

function startAR() {
  const arImage = document.getElementById("arImage");
  arImage.style.display = "block";
  alert("AR/VR preview functionality coming soon!");
}
