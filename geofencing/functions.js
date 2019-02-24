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
  if (
    additionalDataResponse.additionalData &&
    additionalDataResponse.additionalData.length
  ) {
    displayPolygonOnTheMap(additionalDataResponse.additionalData[0]);
  }
}
