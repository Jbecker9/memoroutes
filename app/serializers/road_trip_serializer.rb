class RoadTripSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure, :destination, :pit_stops
  belongs_to :user
  has_one :departure, serializer: RoadTripDepartureSerializer
  has_many :pit_stops, serializer: RoadTripPitStopSerializer
  has_one :destination, serializer: RoadTripDestinationSerializer
end
