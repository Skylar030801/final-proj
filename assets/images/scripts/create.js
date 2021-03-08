function add_products() {
  let products = document.getElementById("products");
  const inputs = products.getElementsByTagName("input");
  let user = {
    product: inputs[0].value,
    products: inputs[1].value,
    description: inputs[2].value,
    image: inputs[3].value,
  };
  console.log(user);
  fetch("http://127.0.0.1:5000/products/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("product has been added");

      window.location.href = "./products.html";
    })
    .catch((err) => console.log(err));
}
