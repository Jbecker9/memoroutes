class RoadTripDestinationSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :lat, :lng, :destination_city, :destination_state
  belongs_to :state
  belongs_to :city
  belongs_to :road_trip
end
