function getFences() {
  return axios
    .get(
      geofencingApiURL +
        "projects/" +
        geofencingProjectId +
        "/fences?key=" +
        apiKey
    )
    .then(function(response) {
      return response.data.fences;
    })
    .catch(function(err) {
      displayModal(
        "There was an error while fetching fences: " + err.response.data
      );
    });
}

function getFenceDetails(fence) {
  var counter =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var retryTimes = 5;
  return axios
    .get(geofencingApiURL + "fences/" + fence.id + "?key=" + apiKey)
    .then(function(response) {
      return response.data;
    })
    .catch(function(err) {
      if (err.response.status == 403 && counter < retryTimes) {
        counter++;
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(getFenceDetails(fence, counter));
          }, 1000);
        });
      } else {
        displayModal(
          "There was an error while fetching fence: " + err.response.data
        );
      }
    });
}

function displayFence(data) {
  var geoJsonData;
  if (data.geometry.type == "Polygon" || data.geometry.type == "MultiPolygon") {
    geoJsonData = data.geometry;
  } else {
    switch (data.geometry.shapeType) {
      case "Circle":
        geoJsonData = turf.circle(
          data.geometry.coordinates,
          data.geometry.radius,
          turfOptions
        );
        break;
      case "Rectangle":
        geoJsonData = turf.envelope(data.geometry);
        break;
      case "Corridor":
        geoJsonData = turf.buffer(
          data.geometry,
          data.geometry.radius,
          turfOptions
        );
        break;
    }
  }
  var fenceGeoJson = tomtom.L.geoJson(geoJsonData, geoJsonOptions)
    .addTo(map)
    .bindPopup(detailsPopup(data))
    .on("popupopen", function() {
      document
        .getElementById("remove-button-" + data.id)
        .addEventListener("click", function() {
          fenceGeoJson.remove();
          removeFence(data.id);
        });
    });
}

function removeFence(id) {
  axios
    .delete(
      geofencingApiURL +
        "fences/" +
        id +
        "?key=" +
        apiKey +
        "&adminKey=" +
        geofencingAdminKey
    )
    .then(console.log("Fence deleted"))
    .catch(function(err) {
      displayModal(
        "There was an error while deleting fence: " + err.response.data.message
      );
    });
}

function saveFence(fenceData, geoJson) {
  return axios
    .post(
      geofencingApiURL +
        "projects/" +
        geofencingProjectId +
        "/fence?key=" +
        apiKey +
        "&adminKey=" +
        geofencingAdminKey,
      fenceData
    )
    .then(function(response) {
      geoJson
        .bindPopup(detailsPopup(response.data))
        .on("popupopen", function() {
          document
            .getElementById("remove-button-" + response.data.id)
            .addEventListener("click", function() {
              geoJson.remove();
              removeFence(response.data.id);
            });
        });
      return response;
    })
    .catch(function(err) {
      console.log(
        "There was an error while saving fences: " + err.response.data.message
      );
    });
}
