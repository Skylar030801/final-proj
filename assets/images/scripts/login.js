function admin() {
  let loginForm = document.getElementById("logForm");
  let inputs = loginForm.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  let users;
  fetch("https://pure-stream-15016.herokuapp.com/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      user = json;
      console.log(password, username, user);

      let logged = user.filter((users) => {
        return user.username == username && user.password == password;
      });

      if (logged.length >= 1) {
        window.location.href = "./login-form.html";
      }
    });
}
