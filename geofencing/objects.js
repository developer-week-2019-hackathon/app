function getObjects() {
  return axios
    .get(
      geofencingApiURL +
      "/objects?key=" +
      apiKey
    )
    .then(function(response) {
      return response.data.objects;
    })
    .catch(function(err) {
      displayModal(
        "There was an error while fetching objects: " + err.response.data
      );
    });
}

function getObjectDetails(object) {
  var counter =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var retryTimes = 5;
  return axios
    .get(geofencingApiURL + "objects/" + object.id + "?key=" + apiKey)
    .then(function(response) {
      return response.data;
    })
    .catch(function(err) {
      if (err.response.status == 403 && counter < retryTimes) {
        counter++;
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(getObjectDetails(object, counter));
          }, 1000);
        });
      } else {
        displayModal(
          "There was an error while fetching object: " + err.response.data
        );
      }
    });
}

function displayObject(data) {
  var geoJsonData;
  geoJsonData = turf.point(
    data.properties.coordinates,
  );
  console.log(geoJsonData);
  var objectGeoJson = tomtom.L.geoJson(geoJsonData, geoJsonOptions)
    .addTo(map)
    .bindPopup(detailsPopup(data))
    .on("popupopen", function() {
      document
        .getElementById("remove-button-" + data.id)
        .addEventListener("click", function() {
          objectGeoJson.remove();
          removeObject(data.id);
        });
    });
}

function removeObject(id) {
  axios
    .delete(
      geofencingApiURL +
      "objects/" +
      id +
      "?key=" +
      apiKey +
      "&adminKey=" +
      geofencingAdminKey
    )
    .then(console.log("Object deleted"))
    .catch(function(err) {
      displayModal(
        "There was an error while deleting object: " + err.response.data.message
      );
    });
}

function saveObject(objectData, geoJson) {
  axios
    .post(
      geofencingApiURL +
      "projects/" +
      geofencingProjectId +
      "/object?key=" +
      apiKey +
      "&adminKey=" +
      geofencingAdminKey,
      objectData
    )
    .then(function(response) {
      geoJson
        .bindPopup(detailsPopup(response.data))
        .on("popupopen", function() {
          document
            .getElementById("remove-button-" + response.data.id)
            .addEventListener("click", function() {
              geoJson.remove();
              removeObject(response.data.id);
            });
        });
    })
    .catch(function(err) {
      displayModal(
        "There was an error while saving objects: " + err.response.data.message
      );
    });
}
