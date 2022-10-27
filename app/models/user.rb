class User < ApplicationRecord
    has_secure_password
    has_many :created_trips, foreign_key: :creator_id, source: :road_trip
    has_many :road_trips, through: :liked_stop
end
