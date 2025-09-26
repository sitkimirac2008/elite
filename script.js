const products = [
  { name: "Product 1", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236078004917" },
  { name: "Product 2", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236324821768" },
  { name: "Product 3", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236287569464" },
  { name: "Product 4", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236053344431" },
  { name: "Product 5", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236327331563" },
  { name: "Product 6", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236328524588" },
  { name: "Product 7", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236321503354" },
  { name: "Product 8", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236328866818" },
  { name: "Product 9", price: "$64.99", img: "", ebayLink: "https://www.ebay.com/itm/236329107746" }
];

const main = document.querySelector(".product-list");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="window.open('${product.ebayLink}', '_blank')">Buy</button>
    <p style="font-size:0.8em; color:#555; margin-top:5px;">
      You must be logged into your eBay.com account.
    </p>
  `;

  main.appendChild(card);
});
