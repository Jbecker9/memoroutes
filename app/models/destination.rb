class Destination < ApplicationRecord
    belongs_to :city
    belongs_to :state 
    belongs_to :road_trip, optional: true 
end
