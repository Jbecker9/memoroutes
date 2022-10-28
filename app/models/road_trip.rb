class RoadTrip < ApplicationRecord
    belongs_to :creator, class_name: "User"
    has_many :liked_routes
    has_many :users, through: :liked_routes
    has_one :departure, as: :stop_format
    has_many :pit_stops, as: :stop_format
    has_one :destination, as: :stop_format
end
