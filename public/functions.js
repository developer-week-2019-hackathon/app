function fuzzySearch(query) {
  return tomtom
    .fuzzySearch()
    .query(query)
    .go()
    .then(function(result) {
      return result;
    });
}

function getAdditionalData(fuzzySearchResults) {
  var geometryId = fuzzySearchResults[0].dataSources.geometry.id;
  return tomtom
    .additionalData({
      geometries: [geometryId],
      geometriesZoom: 12
    })
    .go()
    .then(function(additionalData) {
      return additionalData;
    });
}

function processAdditionalDataResponse(additionalDataResponse) {
  if(
    additionalDataResponse.additionalData &&
    additionalDataResponse.additionalData.length
  ) {
    displayPolygonOnTheMap(additionalDataResponse.additionalData[0]);
  }
}

function fenceCurrentPosition() {
  navigator.geolocation.getCurrentPosition(position => {
    createFenceAndObject([position.coords.longitude, position.coords.latitude]);
  });
}

function createFenceAndObject(coordinates) {
  saveFence(
    {
      type: 'Feature',
      name: 'Fence' + Math.random(),
      geometry: {
        coordinates: coordinates,
        radius: 50,
        type: 'Point',
        shapeType: 'Circle'
      }
    },
    tomtom.L.geoJson()
  ).then(fence => {
    console.log(fence);
    saveObject(
      {
        defaultProject: geofencingProjectId,
        name: 'Object' + Math.random(),
        properties: {
          fence: fence.data.id,
          coordinates: coordinates
        }
      },
      tomtom.L.geoJson()
    );
  });
}
