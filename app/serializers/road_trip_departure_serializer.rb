class RoadTripDepartureSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :lat, :lng, :departure_city ,:departure_state
  belongs_to :state
  belongs_to :city
  belongs_to :road_trip
end
