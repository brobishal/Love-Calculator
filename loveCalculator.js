// random number ma 16 digit ko auxa
function checklove() {
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;
  // if it is null or empty
  if (name == "") {
    alert("Please enter your name");
  } else if (name.length <= 2) {
    alert("minimum length is 3");
  }
  // not a number (NaN)
  // !isNoN is number hai toh
  else if (!isNaN(name)) {
    alert("numbers are not allowed");
  } else if (lname == "") {
    alert("Please enter your name");
  } else if (lname.length <= 2) {
    alert("minimum length is 3");
  }
  // not a number (NaN)
  // !isNoN is number hai toh
  else if (!isNaN(lname)) {
    alert("numbers are not allowed");
  } else {
    var lovedata = Math.random() * 100;
    lovedata = Math.floor(lovedata);
    document.getElementById("lovevalue").value = lovedata + "%";
  }
}
