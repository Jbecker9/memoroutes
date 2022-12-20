class State < ApplicationRecord
    validates :state_name, presence: true

    has_many :cities
    has_many :states, through: :cities

    has_many :departures, through: :cities
    has_many :pit_stops, through: :cities
    has_many :destinations, through: :cities
    
end
