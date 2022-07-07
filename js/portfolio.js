//* open and close contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function validateForm() {
    let x = document.forms["myForm"]["fname"]["Email"]["Message"]["Phone"].value;
    if (x == "") {
      alert("More information needed");
      return false;
    }
  }