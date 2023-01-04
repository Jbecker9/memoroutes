class User < ApplicationRecord
    has_secure_password
    
    validates :username, uniqueness: true
    
    has_many :road_trips
    has_many :departures, through: :road_trips, inverse_of: :user
    has_many :pit_stops, through: :road_trips
    has_many :destinations, through: :road_trips

    has_many :cities, through: :pit_stops

end
