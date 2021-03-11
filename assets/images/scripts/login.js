function register_user() {
  let regForm = document.getElementById("regForm");
  const inputs = regForm.getElementsByTagName("input");
  let user = {
    fullname: inputs[0].value,
    username: inputs[1].value,
    email: inputs[2].value,
    password: inputs[3].value,
  };
  console.log(user);
  fetch("http://127.0.0.1:5000/user-register/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("user has been added");
      // console.log(password, username, user);

      window.location.href = "./products.html";
    })
    .catch((err) => console.log(err));
}

function login_user() {
  let logForm = document.getElementById("login");
  let inputs = logForm.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  fetch("http://127.0.0.1:5000/show-records/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      loggedIn = json.filter((user) => {
        return user.username == username && user.password == password;
      });

      alert("logged in successfully");
      console.log(json, loggedIn);

      // logForm.requestFullscreen();
      if (loggedIn.length >= 1) {
        localStorage.setItem("user-logged", JSON.stringify(username, password));
        window.location.href = "./products.html";
      } else {
        alert("Invalid");
      }
    });
}

function out() {
  localStorage.removeItem("user-logged");
  alert("see you again");
  window.location.href = "./index.html";
}
