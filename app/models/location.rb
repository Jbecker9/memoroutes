class Location < ApplicationRecord
    belongs_to :city
    belongs_to :state
    has_many :departures
    has_many :pit_stops
    has_many :destinations
    has_many :departures
    belongs_to :departure, class_name: "RoadTrip"
    belongs_to :pit_stop, class_name: "RoadTrip"
    belongs_to :destination, class_name: "RoadTrip"
end
