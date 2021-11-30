let form = document.querySelector("form");
// let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  let name = form.elements.name.value;
  let email = form.elements.email.value;
  let message = form.elements.message.value;

  if (name == "" || email == "" || message == "") {
    console.log("Please enter all your information");
    let errorreply = document.createElement("label");
    errorreply.textContent = "Please enter all your information to submit";
    errorreply.style.color = "red";
    errorreply.style.fontWeight = "bold";
    form.append(errorreply);
  } else {
    console.log("Thank you! ");
    let reply = document.createElement("label");
    reply.textContent = "Thank you!";
    form.append(reply);
  }
}
