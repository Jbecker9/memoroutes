class User < ApplicationRecord
    has_secure_password
    
    validates :username, uniqueness: true
    
    # has_one :departure, class_name: "Location", foreign_key: "departure_id"
    # has_many :pit_stops, class_name: "Location", foreign_key: "pit_stop_id"
    # has_one :destination, class_name: "Location", foreign_key: "destination_id"
    has_many :locations
    has_many :road_trips, through: :locations
end
