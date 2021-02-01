$("h1").text("toto");
// code for event listener
$("#btn").click(function(){

var password1 = $("#pass1").val();
var password2 = $("#pass2").val();

if(password1 != "" && password2 != ""){

    if(password1 == password2){
        alert("login successful")
    }
    else{
        alert("login fail")
    }

}else{
    alert("enter the password")

}




})
//code for jquary animation
$("#showhide").click(function(){

    $("#showhiden").toggle(2000)
   // $("#showhiden").hide(2000)
    //$("#showhiden").show(2000)
    //$("#showhiden").fadeIn(2000)
    //$("#showhiden").fadeout(2000)
    // $("#showhiden").fadeToggle(2000)
    //$("#showhiden").fadeout(2000).fadeIn(2000)
    // $("#showhiden").fadeTo(2000,0.7) 
    /*this code is for change 
    the opacity in function 1st parameter is time and 2nd
     paramiter is opacity*/
     // $("#showhiden").slideUp(2000)
     // $("#showhiden").slideDown(2000)
     // $("#showhiden").slideUp(2000).slideDown(2000)
     //$("#showhiden").slideToggle(2000)
     //$("#showhiden").animate({opacity:"0.7"}2000)
     /* always use curly braketes in animate function it 
     always takes json file */
     
     

})