class State < ApplicationRecord
    has_many :cities
    
    has_many :departures, through: :cities
    has_many :pit_stops, through: :cities
    has_many :destinations, through: :cities
    
    validates :state_name, presence: true, uniqueness: true
    
end
