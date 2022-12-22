class State < ApplicationRecord
    has_many :cities
    has_many :states, through: :cities
    
    has_many :departures, through: :cities
    has_many :pit_stops, through: :cities
    has_many :destinations, through: :cities
    
    validates :state_name, presence: true

    before_validation :initialize_state

private

    def initialize_state
        byebug
    end

end
