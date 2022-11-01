class Departure < ApplicationRecord
    belongs_to :city
    belongs_to :state
    has_one :road_trip
end
