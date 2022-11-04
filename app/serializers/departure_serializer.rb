class DepartureSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :lat, :lng, :departure_city ,:departure_state, :destination_city, :destination_state
  belongs_to :state
  belongs_to :city
  belongs_to :road_trip
end
