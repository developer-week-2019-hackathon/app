require 'httparty'
BASE_URI   = 'https://api.tomtom.com/geofencing/1/'.freeze
PROJECT_ID = ''.freeze
API_KEY    = ''.freeze
ADMIN_KEY  = ''.freeze
AUTH_QUERY = "key=#{API_KEY}&adminKey=#{ADMIN_KEY}".freeze
HEADERS    = { 'Content-Type' => 'application/json' }.freeze


def create_fence(name, coordinates)
  HTTParty.post(
    "#{BASE_URI}projects/#{PROJECT_ID}/fence?#{AUTH_QUERY}",
    body: {
      type: 'Feature',
      geometry: {
        coordinates: coordinates,
        radius: 50,
        type: 'Point',
        shapeType: 'Circle'
      },
      name: name,
    }.to_json,
    headers: HEADERS,
  )
end


def create_object(name, coordinates)
  HTTParty.post(
    "#{BASE_URI}objects/object?#{AUTH_QUERY}",
    body: {
      defaultProject: PROJECT_ID,
      properties: { coordinates: coordinates },
      name: name,
    }.to_json,
    headers: HEADERS,
  )
end

def update_object(id, coordinates)
  HTTParty.put(
    "#{BASE_URI}objects/#{id}?#{AUTH_QUERY}",
    body: {
      properties: { coordinates: coordinates },
    }.to_json,
    headers: HEADERS,
  )
end
