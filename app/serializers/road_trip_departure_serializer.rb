class RoadTripDepartureSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng
  belongs_to :state, serializer: DepartureStateSerializer
  belongs_to :city
  belongs_to :road_trip
end
