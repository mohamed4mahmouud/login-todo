function submit() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;
  var msg = document.getElementById("msg");

  if (user === "admin" && pass === "123") {
    msg.textContent = "welcome";
  } else {
    msg.textContent = "not registerd";
  }
}
document.getElementById("btn").onclick = submit;
