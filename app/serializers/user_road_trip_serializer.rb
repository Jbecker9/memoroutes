class UserRoadTripSerializer < ActiveModel::Serializer
  attributes :id, :trip_name, :user_likes, :road_trip_distance_miles, :departure, :pit_stops, :destination
  belongs_to :user
  has_one :departure
  has_one :destination
  has_many :pit_stops
end
