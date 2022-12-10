class RoadTripPitStopSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :lat, :lng, :road_trip_id
  belongs_to :city
  belongs_to :state
  belongs_to :road_trip
end
