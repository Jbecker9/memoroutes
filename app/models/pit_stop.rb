class PitStop < ApplicationRecord
    belongs_to :city
    belongs_to :road_trip, optional: true 
end
