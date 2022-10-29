class Departure < ApplicationRecord
    belongs_to :city
    belongs_to :road_trip
    accepts_nested_attributes_for :city
end
