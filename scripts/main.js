import json from "../data_artists.json" assert {type: "json"};


// Make a map, using Leaflet. Put given coordinates in center and zoom to given view
const map = L.map("map").setView([52.3702157, 4.8951679], 12);


// Load the map from OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Give color to each zone
function getColor(tarief) {
  switch (tarief) {
    case '7,50':
      return '#FF0000';
      break;
    case '6,00':
      return '#FF9D00';
      break;
    case '4,50':
      return '#F7E405';
      break;
    case '3,50':
      return '#6CD800';
      break;
    case '2,50':
      return '#0062FF';
      break;
    case '1,40':
      return '#BE00EB';
      break;
    default:
      return 'black';
  }
}


// Loop over dataset
const dataSet = Object.keys(json).map(key => {

  let polygonArray;

  // Determine if zone is Polygon (one array) or MultiPolygon (more arrays)
  // Put the arrays in one item
  if (json[key].location.type === 'MultiPolygon') {
    polygonArray = json[key].location.coordinates[0];
  } else if (json[key].location.type === 'Polygon') {
    polygonArray = json[key].location.coordinates;
  }

  // Make a polygon based on arrays in zone, give color: none
  return {
    zoneId: key,
    areas: polygonArray,
    tarieven: json[key].tarieven[0],
    polygons: polygonArray.map(arr => {
      return L.polygon(arr.map(item => item.reverse()), {
        color: "none"
      }).addTo(map)
    })
  }
})