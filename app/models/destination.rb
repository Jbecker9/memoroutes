class Destination < ApplicationRecord
    belongs_to :road_trip
    belongs_to :user

    belongs_to :city
    belongs_to :state

    accepts_nested_attributes_for :city, :state
end
