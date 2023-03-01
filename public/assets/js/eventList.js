const eventList = {
  "second": [
    {
      "id": "cryptichunt",
      "name": "CRYPTIC HUNT (ROUND 1)",
      "time": "11:15AM - 12:15PM",
      "venue": "254, 255, 257, 242, Block II",
      "more": "event.html?event=cryptichunt"
    },
    {
      "id": "kbgames",
      "name": "KB GAMES",
      "time": "01:30PM - 04:30PM",
      "venue": "257, 242, Block II",
      "more": "event.html?event=kbgames"
    },
    {
      "id": "cryptichunt",
      "name": "CRYPTIC HUNT (ROUND 2)",
      "time": "02:00PM - 04:30PM",
      "venue": "254, 255, 257, 242, Block II",
      "more": "event.html?event=cryptichunt"
    }
  ],
  "third": [
    {
      "id": "uiux",
      "name": "UI / UX (ROUND 1)",
      "time": "09:15AM - 10:15AM",
      "venue": "257, 242, Block II",
      "more": "event.html?event=uiux"
    },
    {
      "id": "hackattack",
      "name": "HACK ATTACK (ROUND 1)",
      "time": "10:30AM - 11:30AM",
      "venue": "254, 255, 257, 242, 245, 246, Block II",
      "more": "event.html?event=hackattack"
    },
    {
      "id": "avmixify",
      "name": "AV MIXIFY",
      "time": "01:30PM - 03:00PM",
      "venue": "257, 242, Block II",
      "more": "event.html?event=avmixify"
    },
    {
      "id": "uiux",
      "name": "UI / UX (ROUND 2)",
      "time": "11:30AM - 01:00PM",
      "venue": "257, 242, Block II",
      "more": "event.html?event=uiux"
    },
    {
      "id": "hackattack ",
      "name": "HACK ATTACK (ROUND 2)",
      "time": "03:00PM - 04:30PM",
      "venue": "257, 242, Block II",
      "more": "event.html?event=hackattack"
    },
    
  ]
}

const da ={
  "second" : "02/03/2023",
  "third" : "03/03/2023"
}


for (const [key, value] of Object.entries(eventList)) {
  const mid = document.createElement("div");
  mid.setAttribute('class', `events-container ${key}`)
  const midspan = document.createElement("span");
  midspan.setAttribute('class', 'events__title')

  const elem = document.createElement("ul");
  elem.setAttribute('class', 'events__list')
  value.map(event => {
    var child = document.createElement("li");
    child.setAttribute('class', 'events__item')

    if ((event.type != undefined && event.type == "noevent") || event.id == "inauguration"){
      const h3h3 = document.createElement('h3');
      if (event.id == "inauguration") {
        h3h3.setAttribute('class', 'noevents__title blackclr')
        h3h3.innerText = "Inauguration";
      child.appendChild(h3h3);
      } else {
        h3h3.setAttribute('class', 'noevents__title')
        h3h3.innerText = "No events found";
        child.appendChild(h3h3);
      }
      

    } else {

      var spanname = document.createElement("span");
      spanname.setAttribute('class', 'events__name')
      spanname.innerText = event.name;

      var spantag = document.createElement("span");
      spantag.setAttribute('class', 'events__tag')
      spantag.innerText = event.time;

      var divtag = document.createElement("div");
      divtag.setAttribute('class', 'events__item--left')

      divtag.appendChild(spanname);
      divtag.appendChild(spantag);



      //
      var atag1 = document.createElement("a");
      atag1.classList.add("atagwhite");
      atag1.setAttribute('href', event.register)
      atag1.innerText = "Register"

      var atag2 = document.createElement("a");
      atag2.classList.add("atagwhite");
      atag2.setAttribute('href', event.more)
      atag2.innerText = "More Info"

      var spantag2a = document.createElement("div");
      spantag2a.setAttribute('class', 'events__tag regbtn')
      spantag2a.setAttribute('onclick', `window.location.href="${event.register}"`)
      spantag2a.appendChild(atag1);

      var spantag2b = document.createElement("div");
      spantag2b.setAttribute('class', 'events__tag regbtn')
      spantag2b.setAttribute('onclick', `window.location.href="${event.more}"`)
      spantag2b.appendChild(atag2);

      var divtag2 = document.createElement("div");
      divtag2.setAttribute('class', 'dispflex')
      // divtag2.appendChild(spantag2a)
      divtag2.appendChild(spantag2b)

      child.appendChild(divtag);
      child.appendChild(divtag2);
    }
    elem.appendChild(child);
  })

  midspan.innerText = `events on ${da[key]}`;
  mid.appendChild(midspan)
  mid.appendChild(elem);
  document.getElementsByClassName('portfolio-container')[0].appendChild(mid)
}

var numDate = new Date().getDate()

window.onload = () =>{
  var numDate = new Date().getDate()
  if(numDate<2)
  numDate = 2
  console.log(numDate);
  document.getElementById(`calenderid${2}`).click()
};

