class RoadTripPitStopSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :stop_city, :stop_state, :lat, :lng
  belongs_to :city
  belongs_to :state
  belongs_to :road_trip
end
