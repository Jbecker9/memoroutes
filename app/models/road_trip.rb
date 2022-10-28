class RoadTrip < ApplicationRecord
    belongs_to :user
    has_one :departure, as: :stop_format
    has_many :pit_stops, as: :stop_format
    has_one :destination, as: :stop_format
end
