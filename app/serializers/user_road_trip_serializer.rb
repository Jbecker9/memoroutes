class UserRoadTripSerializer < ActiveModel::Serializer
  attributes :id, :trip_name
  belongs_to :user
  has_one :departure, serializer: RoadTripDepartureSerializer
  has_one :destination
  has_many :pit_stops
end
