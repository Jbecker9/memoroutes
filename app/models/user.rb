class User < ApplicationRecord
    has_secure_password
    has_many :locations, as: :location_format
    has_many :road_trips, through: :locations
    has_many :favorite_stops, through: :pit_stops
end
