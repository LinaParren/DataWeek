import {
  color
} from "d3";
import json from "../data_artists_usa.json" assert {
  type: "json"
};


// Make a map, using Leaflet. Put given coordinates in center and zoom to given view
const map = L.map("map").setView([40.005585203396244, -100.01101198464937], 4);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var arizona = L.polygon(json['1'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var california = L.polygon(json['4'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var colorado = L.polygon(json['21'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var georgia = L.polygon(json['22'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var illinois = L.polygon(json['24'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var kansas = L.polygon(json['28'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var michigan = L.polygon(json['29'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var mississippi = L.polygon(json['30'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var newjersey = L.polygon(json['31'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var newyork = L.polygon(json['32'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var oklahoma = L.polygon(json['38'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var oregon = L.polygon(json['39'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var pennsylvania = L.polygon(json['40'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var tennessee = L.polygon(json['46'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var texas = L.polygon(json['48'].Coordinates.map(item => item), {color: 'none'}).addTo(map);
var washington = L.polygon(json['75'].Coordinates.map(item => item), {color: 'none'}).addTo(map);


// pop         red      v
// hiphop      orange   v
// rb          green   v
// newwave     
// indie       purple     v
// rock        blue     v
// hardrock    
// progrock    
// altrock     brown    v
// symrock     yellow   v
// funkrock    


const markerarizona = L.marker([34.34834363288256, -111.7516612994592], {
  alt: 'Arizona'}, {icon: RockIcon}).addTo(map).bindPopup('<strong>Arizona</strong>: <br> Rock: 100%');

const markercalifornia = L.marker([36.37213197363729, -119.68014210845405], {
  alt: 'California'}, {icon: RockIcon}).addTo(map).bindPopup('<strong>California</strong>: <br> Rock: 38,5% <br> Hardrock: 15,4% <br> Indie: 15,4% <br> Pop: 15,4% <br> Funkrock: 7,7% <br> R&B: 7,7%');

const markercolorado = L.marker([38.584661655924165, -105.25121709097505], {
  alt: 'Colorado'}, {icon: rbIcon}).addTo(map).bindPopup('<strong>Colorado</strong>: <br> R&B: 100%');

const markergeorgia = L.marker([32.660175802041195, -83.25658860038746], {
  alt: 'Georgia'}, {icon: altIcon}).addTo(map).bindPopup('<strong>Georgia</strong>: <br> Alternative rock: 50% <br> Hiphop: 50%');

const markerillinois = L.marker([40.20918394127566, -89.38442311809594], {
  alt: 'Illinois'}, {icon: RockIcon}).addTo(map).bindPopup('<strong>Illinois</strong>: <br> Rock: 66% <br> Progressive rock: 33%');

const markerkansas = L.marker([38.61900493520111, -98.11010351582236], {
  alt: 'Kansas'}, {icon: sympIcon}).addTo(map).bindPopup('<strong>Kansas</strong>: <br> Symphonic rock: 100%');

const markermichigan = L.marker([43.868187528949036, -84.26733071021309], {
  alt: 'Michigan'}, {icon: rbIcon}).addTo(map).bindPopup('<strong>Michigan</strong>: <br> R&B: 100%');

const markermississippi = L.marker([33.47038692737291, -89.98022109169376], {
  alt: 'Mississippi'}, {icon: RockIcon}).addTo(map).bindPopup('<strong>Mississippi</strong>: <br> Rock: 100%');

const markernewjersey = L.marker([39.53453955695227, -74.85726626984727], {
  alt: 'New Jersey'}, {icon: RockIcon}).addTo(map).bindPopup('<strong>New Jersey</strong>: <br> Rock: 100%');

const markernewyork = L.marker([42.97450041571189, -75.74194020697276], {
  alt: 'New York'}, {icon: hiphopIcon}).addTo(map).bindPopup('<strong>New York</strong>: <br> Hiphop: 40% <br >Rock: 40% <br> New wave: 20%');

const markeroklahoma = L.marker([35.914077038300434, -97.4505078322336], {
  alt: 'Oklahoma'}, {icon: hiphopIcon}).addTo(map).bindPopup('<strong>Oklahoma</strong>: <br> Hiphop: 100%');

const markeroregon = L.marker([43.888488969334944, -120.21417889711766], {
  alt: 'Oregon'}, {icon: hiphopIcon}).addTo(map).bindPopup('<strong>Oregon</strong>: <br> Hiphop: 100%');

const markerpennsylvania = L.marker([40.882360328232195, -77.71947917500403], {
  alt: 'Pennsylvania'}, {icon: indieIcon}).addTo(map).bindPopup('<strong>Pennsylvania</strong>: <br> Indie: 25% <br> Rock: 25% <br> Pop: 25% <br> Hiphop: 25%');

const markertennessee = L.marker([35.71305605938703, -86.90404936364513], {
  alt: 'Tennessee'}, {icon: popIcon}).addTo(map).bindPopup('<strong>Tennessee</strong>: <br> Pop: 50% <br> Hiphop: 50%');

const markertexas = L.marker([31.61829255863286, -99.12084534014252], {
  alt: 'Texas'}, {icon: hiphopIcon}).addTo(map).bindPopup('<strong>Texas</strong>: <br> Hiphop: 50% <br> Rock: 50%');

const markerwashington = L.marker([47.34067388249494, -120.12670488308689], {
  alt: 'Washington'}, {icon: RockIcon}).addTo(map).bindPopup('<strong>Washington</strong>: <br> Rock: 100%');



var Icons = L.Icon.extend({
  options: {
    // iconUrl: 'Icon_rock.png',
    shadowUrl: 'Icon_rock.png',
    iconSize: [38, 95],
}
});
var RockIcon = new Icons({iconUrl: 'Icon_rock.png'});
// var RockIcon = new rockIcon();

var hiphopIcon = L.icon({
  iconUrl: 'Icon_hiphop.png',
  iconSize: [38, 95]
});
var popIcon = L.icon({
  iconUrl: 'Icon_pop.png',
  iconSize: [38, 95]
});
var indieIcon = L.icon({
  iconUrl: 'Icon_indie.png',
  iconSize: [38, 95]
});
var rbIcon = L.icon({
  iconUrl: 'Icon_rb.png',
  iconSize: [38, 95]
});
var altIcon = L.icon({
  iconUrl: 'Icon_alt.png',
  iconSize: [38, 95]
});
var sympIcon = L.icon({
  iconUrl: 'Icon_symp.png',
  iconSize: [38, 95]
});


// let zone1 = document.querySelector('#zone1');
// zone1.addEventListener('change', kleur);

// function kleur() {
//   var check1 = document.getElementById("zone1");

//   if (check1.checked == true) {
//     console.log("wel checked")
//   } else {
//     console.log("niet checked")
//   }
// }

let rock = document.querySelector('#rock');
rock.addEventListener('change', colorRock);
let hiphop = document.querySelector('#hiphop');
hiphop.addEventListener('change', colorHiphop);
let pop = document.querySelector('#pop');
pop.addEventListener('change', colorPop);
let indie = document.querySelector('#indie');
indie.addEventListener('change', colorIndie);
let rb = document.querySelector('#rb');
rb.addEventListener('change', colorRb);
// let hardrock = document.querySelector('#hardrock');
// hardrock.addEventListener('change', colorGenre);
let altrock = document.querySelector('#altrock');
altrock.addEventListener('change', colorAlt);
// let funkrock = document.querySelector('#funkrock');
// funkrock.addEventListener('change', colorGenre);
// let newwave = document.querySelector('#newwave');
// newwave.addEventListener('change', colorGenre);
// let progrock = document.querySelector('#progrock');
// progrock.addEventListener('change', colorGenre);
let symprock = document.querySelector('#symprock');
symprock.addEventListener('change', colorSymp);

function colorRock() {
  var rock = document.getElementById("rock");
  if (rock.checked == true) {
    arizona.setStyle({
      color: 'blue'
    });
    california.setStyle({
      color: 'blue'
    });
    illinois.setStyle({
      color: 'blue'
    });
    mississippi.setStyle({
      color: 'blue'
    });
    newjersey.setStyle({
      color: 'blue'
    });
    washington.setStyle({
      color: 'blue'
    });
  } else {
    arizona.setStyle({
      color: 'none'
    });
    california.setStyle({
      color: 'none'
    });
    illinois.setStyle({
      color: 'none'
    });
    mississippi.setStyle({
      color: 'none'
    });
    newjersey.setStyle({
      color: 'none'
    });
    washington.setStyle({
      color: 'none'
    });
  }
}

function colorHiphop() {
  var hiphop = document.getElementById("hiphop");
  if (hiphop.checked == true) {
    oregon.setStyle({
      color: 'orange'
    });
    oklahoma.setStyle({
      color: 'orange'
    });
    texas.setStyle({
      color: 'orange'
    });
    newyork.setStyle({
      color: 'orange'
    });
  } else {
    oregon.setStyle({
      color: 'none'
    });
    oklahoma.setStyle({
      color: 'none'
    });
    texas.setStyle({
      color: 'none'
    });
    newyork.setStyle({
      color: 'none'
    });
  }
}

function colorPop() {
  var pop = document.getElementById("pop");
  if (pop.checked == true) {
    tennessee.setStyle({
      color: 'red'
    });
  } else {
    tennessee.setStyle({
      color: 'none'
    });
  }
}

function colorIndie() {
  var indie = document.getElementById("indie");
  if (indie.checked == true) {
    pennsylvania.setStyle({
      color: 'purple'
    });
  } else {
    pennsylvania.setStyle({
      color: 'none'
    });
  }
}

function colorRb() {
  var rb = document.getElementById("rb");
  if (rb.checked == true) {
    colorado.setStyle({
      color: 'green'
    });
    michigan.setStyle({
      color: 'green'
    });
  } else {
    colorado.setStyle({
      color: 'none'
    });
    michigan.setStyle({
      color: 'none'
    });
  }
}

function colorAlt() {
  var alt = document.getElementById("alt");
  if (altrock.checked == true) {
    georgia.setStyle({
      color: 'brown'
    });
  } else {
    georgia.setStyle({
      color: 'none'
    });
  }
}

function colorSymp() {
  var symp = document.getElementById("symp");
  if (symprock.checked == true) {
    kansas.setStyle({
      color: 'yellow'
    });
  } else {
    kansas.setStyle({
      color: 'none'
    });
  }
}


// oregon
// oklahome
// texas
// newyork
// tennessee
// pennsylvania

//          <p>Rock</p>
//         <p>Hiphop</p>
//         <p>Pop</p>
//         <p>Indie</p>
//         <p>R&B</p>
//         <p>Hardrock</p>
//         <p>Alternative rock</p>
//         <p>Funkrock</p>
//         <p>New wave</p>
//         <p>Progressive rock</p>
//         <p>Symphonic rock</p>

let lina = document.querySelector('#lina');
lina.addEventListener('change', colorLina);
let milo = document.querySelector('#milo');
milo.addEventListener('change', colorMilo);

function colorLina() {
  var lina = document.getElementById("lina");
  if (lina.checked == true) {
    arizona.setStyle({
      color: 'blue'
    });
    california.setStyle({
      color: 'blue'
    });
    illinois.setStyle({
      color: 'blue'
    });
    mississippi.setStyle({
      color: 'blue'
    });
    newjersey.setStyle({
      color: 'blue'
    });
    washington.setStyle({
      color: 'blue'
    });
    oregon.setStyle({
      color: 'none'
    });
    oklahoma.setStyle({
      color: 'none'
    });
    texas.setStyle({
      color: 'none'
    });
    newyork.setStyle({
      color: 'none'
    });
    tennessee.setStyle({
      color: 'none'
    });
    colorado.setStyle({
      color: 'none'
    });
    michigan.setStyle({
      color: 'none'
    });
    pennsylvania.setStyle({
      color: 'none'
    });
    georgia.setStyle({
      color: 'none'
    });
    kansas.setStyle({
      color: 'none'
    });
  } else {
    arizona.setStyle({
      color: 'none'
    });
    california.setStyle({
      color: 'none'
    });
    illinois.setStyle({
      color: 'none'
    });
    mississippi.setStyle({
      color: 'none'
    });
    newjersey.setStyle({
      color: 'none'
    });
    washington.setStyle({
      color: 'none'
    });
  }
}

function colorMilo() {
  var milo = document.getElementById("milo");
  if (milo.checked == true) {
    oregon.setStyle({
      color: 'orange'
    });
    oklahoma.setStyle({
      color: 'orange'
    });
    texas.setStyle({
      color: 'orange'
    });
    newyork.setStyle({
      color: 'orange'
    });
    arizona.setStyle({
      color: 'none'
    });
    california.setStyle({
      color: 'none'
    });
    illinois.setStyle({
      color: 'none'
    });
    mississippi.setStyle({
      color: 'none'
    });
    newjersey.setStyle({
      color: 'none'
    });
    washington.setStyle({
      color: 'none'
    });
    tennessee.setStyle({
      color: 'none'
    });
    colorado.setStyle({
      color: 'none'
    });
    michigan.setStyle({
      color: 'none'
    });
    pennsylvania.setStyle({
      color: 'none'
    });
    georgia.setStyle({
      color: 'none'
    });
    kansas.setStyle({
      color: 'none'
    });
  } else {
    oregon.setStyle({
      color: 'none'
    });
    oklahoma.setStyle({
      color: 'none'
    });
    texas.setStyle({
      color: 'none'
    });
    newyork.setStyle({
      color: 'none'
    });
  }
}