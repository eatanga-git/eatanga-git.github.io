var a = document.getElementById("a"),
 s = document.getElementById("s"),
 c = document.getElementById("c");

 var a_page = document.querySelector(".about_PAGE");
 var s_page = document.querySelector(".services_PAGE");
 var p_page = document.querySelector(".portfolio_PAGE");
 var c_page = document.querySelector(".contact_PAGE");
 var h_page = document.querySelector(".home_PAGE");

function showAbout(){
  a_page.style.display = "block";
  s_page.style.display = "none";
  c_page.style.display = "none";
  h_page.style.display = "none";
  p_page.style.display = "none";
}
function showServices(){
    a_page.style.display = "none";
    s_page.style.display = "block";
    c_page.style.display = "none";
    h_page.style.display = "none";
    p_page.style.display = "none";
}
function showContact(){
    a_page.style.display = "none";
    s_page.style.display = "none";
    c_page.style.display = "block";
    h_page.style.display = "none";
    p_page.style.display = "none";
}
function showHome(){
    a_page.style.display = "none";
    s_page.style.display = "none";
    c_page.style.display = "none";
    h_page.style.display = "block";
    p_page.style.display = "none";
}

function appear(elem){
  elem.style.opacity = "50%;"
}



function PshowAbout(){
    a_page.style.display = "block";
    p_page.style.display = "none";
    s_page.style.display = "none";
    c_page.style.display = "none";
    h_page.style.display = "none";
}
function PshowServices(){
    a_page.style.display = "none";
    p_page.style.display = "none";
    s_page.style.display = "block";
    c_page.style.display = "none";
    h_page.style.display = "none";
}
function PshowContact(){
    a_page.style.display = "none";
    p_page.style.display = "none";
    s_page.style.display = "none";
    c_page.style.display = "block";
    h_page.style.display = "none";
}

function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>$(this).height()){
      $(".home_block").css({"opacity" : "0"});
    }
    else{
      $(".home_block").css({"opacity" : "1"});
    }
  })
})

*/

/*var about = document.querySelector(".about_PAGE");

about.addEventListener("click", function (){
  about.style.display = "block";
});

$(document).ready(function(){

  var $home = $(".home_PAGE"),
  $about = $(".about_PAGE"),
  $service = $(".service"),
  $contact = $(".contact_PAGE"),
  $portfolio = $(".portfolio_PAGE");

  $about.click(function (){
    $service.fadeOut
  })



});*/
