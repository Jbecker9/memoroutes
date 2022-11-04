class RoadTripSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure, :destination
  belongs_to :user
  has_one :departure, serializer: RoadTripDepartureSerializer
  has_many :pit_stops
  has_one :destination, serializer: RoadTripDestinationSerializer
end
