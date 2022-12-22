class City < ApplicationRecord
    validates :city_name, presence: true
    belongs_to :state
    has_many :departures
    has_many :pit_stops
    has_many :destinations

    before_validation :initialize_state

private
    
        def initialize_state
            byebug
        end

end
