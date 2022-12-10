class State < ApplicationRecord
    validates :state_name, presence: true
    has_many :cities
    has_many :departures
    has_many :pit_stops
    has_many :destinations
end
