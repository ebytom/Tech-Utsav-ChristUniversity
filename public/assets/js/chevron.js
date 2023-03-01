// $(".chevron").click(function(){
//     $(this).toggleClass("rotatechevron"); 
// });

function changechevron(id) {
    document.getElementById(id).classList.toggle('rotatechevron');
}

// $('.dropdown').on('mouseover',()=>{
//     $('.dropdown-parent').addClass('show');
// })
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });

  return false;
});

// window.onload = () => {
//   document.getElementsByClassName('loader')[0].remove()
//   document.getElementsByTagName('html')[0].classList.remove('htmlll')
// }
setTimeout(() => {
  document.getElementsByClassName('loader')[0].remove()
  document.getElementsByTagName('html')[0].classList.remove('htmlll')
}, 2000);

const events ={
  "tech": [
    {
      id:"breakthequery",
      name:"Break the query"
    },
    {
      id:"codeathon",
      name:"Codeathon"
    },
    {
      id:"illustra",
      name:"Illustra"
    },
    {
      id:"aihackathon",
      name:"AI Hackathon"
    },
    {
      id:"ideathon",
      name:"Ideathon"
    },
    {
      id:"gamedevelopment",
      name:"KB Games"
    },
    {
      id:"cssbattle",
      name:"CSS Battle"
    },
    {
      id:"techquiz",
      name:"Tech Quiz"
    },
    {
      id:"webally",
      name:"Webally"
    }
  ],
  "nontech": [
    {
      id:"blindtyping",
      name:"Blind Typing"
    },
    {
      id:"openmic",
      name:"Open Mic"
    },
    {
      id:"flixnmanga",
      name:"Flix N Manga"
    },
    {
      id:"aceclutch",
      name:"Ace Clutch"
    },
    {
      id:"imagebrush",
      name:"Image Brush"
    },
    {
      id:"acciolanocien",
      name:"Accio La Nocien"
    }
  ],
  "workshop":[
    {
      id:"webdevworkshop",
      name:"Web Development"
    }
    ,
    {
      id:"gamedevworkshop",
      name:"Game Development"
    }
    ,
    {
      id:"javaworkshop",
      name:"Java Programming"
    }
    ,
    {
      id:"cworkshop",
      name:"C Programming"
    }
    ,
    {
      id:"researchworkshop",
      name:"Research"
    }
  ]
}
// import events from './events.json'
// const events = require('../json/events.json');

events.tech.map(event=>{
  var elem = `<div onclick="window.location.href ='event.html?event=${event.id}';" class="elecard">${event.name}</div>`
  document.getElementById('childdiv1').innerHTML += elem;
})

events.nontech.map(event=>{
  var elem = `<div onclick="window.location.href ='event.html?event=${event.id}';" class="elecard">${event.name}</div>`
  document.getElementById('childdiv2').innerHTML += elem;
})

events.workshop.map(event=>{
  var elem = `<div onclick="window.location.href ='event.html?event=${event.id}';" class="elecard">${event.name}</div>`
  document.getElementById('childdiv3').innerHTML += elem;
})