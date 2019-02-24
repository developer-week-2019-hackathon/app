var geofencingApiURL = 'https://api.tomtom.com/geofencing/1/';

tomtom.setProductInfo("Fence manager", "1.0");
var map = tomtom.L.map("map", {
  key: apiKey
});

map.locate({ setView: true, maxZoom: 13 });

tomtom
  .controlPanel({
    position: "topright",
    collapsed: false,
    closeOnMapClick: false,
    close: null
  })
  .addTo(map)
  .addContent('foo');

var geoJsonOptions = {
  style: {
    color: "#2FAAFF",
    opacity: 0.8
  }
};

var turfOptions = {
  steps: 60,
  units: "meters"
};

function detailsPopup(data) {
  var prop = JSON.stringify(data.properties, null, 4).replace(/\n/g, "<br>");
  return (
    '<div class="form">' +
    '<div class="form__row form__row--compact">' +
    "Name: " +
    data.name +
    "</div>" +
    '<div class="form__row form__row--compact">' +
    "Id: " +
    data.id +
    "</div>" +
    '<div class="form__row form__row--compact">' +
    "Properties: <br>" +
    prop +
    "</div>" +
    '<div class="form__row form__row--compact">' +
    '<input type="button" id="remove-button-' +
    data.id +
    '" class="btn-submit btn-submit--remove" value="Remove">' +
    "</div>" +
    "</div>"
  );
}

getFences().then(fences => {
  fences.forEach(fence => getFenceDetails(fence).then(displayFence));
});

getObjects().then(objects => {
  objects.forEach(object => getObjectDetails(object).then(displayObject));
});
