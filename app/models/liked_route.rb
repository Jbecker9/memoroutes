class LikedRoute < ApplicationRecord
    belongs_to :user
    belongs_to :road_trip
end
