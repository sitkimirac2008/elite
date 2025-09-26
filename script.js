// Adding products is easy: just add a new object to the products array
const products = [
  {
    name: "Sample Product 1",
    price: "$29.99",
    img: "https://via.placeholder.com/220",
    ebayLink: "https://www.ebay.com/itm/1234567890"
  },
  {
    name: "Sample Product 2",
    price: "$49.99",
    img: "https://via.placeholder.com/220",
    ebayLink: "https://www.ebay.com/itm/0987654321"
  },
  {
    name: "New Product",
    price: "$99.99",
    img: "https://via.placeholder.com/220",
    ebayLink: "https://www.ebay.com/itm/1122334455"
  }
];

const main = document.getElementById("product-list");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 0.2}s`; // staggered fade-in

  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="window.open('${product.ebayLink}', '_blank')">Buy</button>
    <p style="font-size:0.8em; color:#555; margin-top:5px;">
      You must be logged into your eBay.com account.
    </p>
  `;

  main.appendChild(card);
});
