$(document).ready(function(){
  $('#phone').inputmask('99-9999999999');
});

function ValidateEmail(inputText)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.MyForm.Email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.MyForm.Email.focus();
return false;
}
}

function security(input)
{
if(input.value.toUpperCase() === "PEACOCK")
{
alert("Correct answer");
document.MyForm.Confirmation.focus();
return true;
}
else
{
alert("You have entered wrong answer");
document.MyForm.Confirmation.focus();
return false;
}
}
