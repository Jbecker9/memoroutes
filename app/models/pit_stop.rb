class PitStop < ApplicationRecord
    belongs_to :user
    belongs_to :road_trip

    belongs_to :city
    belongs_to :state
end
