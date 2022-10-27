class Location < ApplicationRecord
    belongs_to :city
    has_many :road_trips
    has_many :departures, through: :road_trips, source: :location_format
    has_many :pit_stops, through: :road_trips, source: :location_format
    has_many :destinations, through: :road_trips, source: :location_format
end
