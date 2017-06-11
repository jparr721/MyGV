$(document).ready(function () {
  $('div.login-box').fadeIn(2000).removeClass('.login-box');

});

var username = ["G01348213"];
var password = ["1234"];



function checkUsernameAndPassword(username, password) {
  this.username = document.getElementByID('inputEmail');
  this.password = document.getElementByID('inputPassword');
  if (this.username != username || this.password != password){
    console.log("error!");
    alert("incorrect username and password")
  } else {
    console.log("Success");
    location.href="../Dashboard/index.html"
  }
}
