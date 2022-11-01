class RoadTripDepartureSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :lat, :lng
  belongs_to :state
  belongs_to :city
  belongs_to :road_trip
end
