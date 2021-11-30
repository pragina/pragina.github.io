let form = document.querySelector("form");

const handleSubmit = (event) => {
  let name = form.elements.name.value;
  let email = form.elements.email.value;
  let message = form.elements.message.value;

  let errormessage = document.querySelector("#errorMessageContainer");
  let successmessage = document.querySelector("#successMessageContainer");

  if (name == "" || email == "" || message == "") {
    errormessage.style = "display:block";
    successmessage.style = "display:none";
  } else {
    errormessage.style = "display:none";
    successmessage.style = "display:block";
    form.elements.name.value = "";
    form.elements.email.value = "";
    form.elements.message.value = "";
  }
};
