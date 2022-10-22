class User < ApplicationRecord
    has_secure_password
    has_many :locations
    has_many :road_trips, through: :locations
    has_many :favorite_stops, through: :pit_stops
    has_many :departures, through: :locations, source: :location_format, source_type: "Departure"
    has_many :pit_stops, through: :locations, source: :location_format, source_type: "PitStop"
    has_many :destinations, through: :locations, source: :location_format, source_type: "Destination"
end
