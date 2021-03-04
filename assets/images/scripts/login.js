function register_user() {
  let loginForm = document.getElementById("logForm");
  const inputs = loginForm.getElementsByTagName("input");
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

      let logged = json.filter((user) => {
        return user.username == username && user.password == password;
      });

      if (logged.length >= 1) {
        window.location.href = "./index.html";
      }
    })
    .catch((err) => console.log(err));
}
