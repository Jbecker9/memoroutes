class RoadTripDepartureSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng, :city_name, :state_name
  belongs_to :state, serializer: DepartureStateSerializer
  belongs_to :city
  belongs_to :road_trip
end
