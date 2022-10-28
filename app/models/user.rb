class User < ApplicationRecord
    has_secure_password
    has_many :created_trips, foreign_key: :creator_id, class_name: "RoadTrip"
    has_many :liked_routes
    has_many :road_trips, through: :liked_routes
end
