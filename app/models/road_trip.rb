class RoadTrip < ApplicationRecord
    belongs_to :user
    has_one :departure
    has_many :pit_stops
    has_one :destination
    accepts_nested_attributes_for :departure
end
