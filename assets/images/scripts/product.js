function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

i = 0;

function add() {
  if (i >= 0) {
    document.getElementById("amount").innerHTML = i += 1;
  }
}

const params = new URLSearchParams(window.location.search);

// Get elements to change
const product_item = document.getElementById("product-item");

if (params.has("oilID")) {
  fetch(`http://127.0.0.1:5000/show-products/${params.get("oilID")}`)
    .then((response) => response.json())
    .then((prdct) => {
      console.log(prdct);
      product_item.innerHTML = `
      <div class="beside" id="product-item">
        <img
          src=${prdct.image}
        />
        <div class="productp">
          
            <h1 class="product-heading">${prdct.name}</h1>
          <h2>Price: ${prdct.price}</h2>
            <p>
              ${prdct.description}
            </p>
            <h3>Size: ${prdct.size}</h3>
            <button class="button" type="button"  onclick="add(${prdct.id})">
            ADD TO CART <i class="fa fa-shopping-cart"></i>
          </button>
          </div>
          
          </div>`;
    });
} else {
  window.location.href = "./404.html";
}
