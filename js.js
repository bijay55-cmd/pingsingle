//Validate the Email
function emailFunction()
{
  var email;
  var email = document.getElementById("txtemail").value;
  var reg=/^([A-Za-z0-9_\-\.])+\@([A-za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(txtemail.value) == false)

{  document.getElementById("results").innerHTML;
    document.getElementById("results").style.color="red";
    document.getElementById("txtemail").style.border="2px solid red";
    document.getElementById("results").style.display = "block";
    return false;
  }


    else{
      document.getElementById("results").innerHTML;
      document.getElementById("results").style.color="green";
    document.getElementById("txtemail").style.border="2px solid green";
      document.getElementById("results").style.display = "block";
    }
  return true;
}
