class UserRoadTripSerializer < ActiveModel::Serializer
  attributes :id, :trip_name, :user_likes, :road_trip_distance_miles
  belongs_to :user
  has_one :departure, serializer: RoadTripDepartureSerializer
  has_one :destination
  has_many :pit_stops
end
