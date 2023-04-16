const onNameClick = function () {
  //  console.log('got into function')
  //   $('#message').text('Welcome to the moon.')
  //   $('#message').css('background-Color', 'blue')
  //   setTimeout(() => $('#message').text(''), 3000)
  //   $('.container').addClass('animated rollOut');
  //   $('#welcomePage').addClass('animated rollIn')
  }

const addHandlers = () => {
    // $('#nextView').on('click', onMoonClick)
  }

  $(() => {
    addHandlers()
  })


  window.onload=()=>{
    const $ = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

$('#menu').onclick=()=>{              $('#menu').classList.toggle('rotate')
  $('.nav-page1').classList.toggle('transform')
  $('.nav-page2').classList.toggle('transform')
  $('.menu-line1').classList.toggle('rotate1')
   $('.menu-line2').classList.toggle('rotate2')
}
}






/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}