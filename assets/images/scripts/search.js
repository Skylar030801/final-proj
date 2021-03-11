function searchProducts() {
  let form = document.getElementById("search-form");
  let searchTerm = form.getElementsByTagName("input");

  let searchRegEx = new RegExp(searchTerm, "i");

  fetch("http://127.0.0.1:5000/show-products/")
    .then((Response) => Response.json())
    .then((json) => {
      let result = json.filter((product) => {
        return product.product_name.search(searchRegEx) !== -1;
      });

      if (result.length > 0) {
        document.getElementsById("li-items").innerHTML = "";
        result.forEach((product) => createsaleItem(product));
      } else {
        alert("nothing found");
      }
    })

    .catch((err) => {
      console.log(err);
    });
}
