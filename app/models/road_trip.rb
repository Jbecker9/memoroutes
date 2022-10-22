class RoadTrip < ApplicationRecord
    has_many locations
    has_many :users, through: locations
    has_one :departure, through: users, source: :location_format, source_type: "Departure"
    has_many :pit_stops, through: :users, source: :location_format, source_type: "PitStop", optional: true
    has_one :destinations, through: :users, source: :location_format, source_type: "Destination" , optional: true
end
