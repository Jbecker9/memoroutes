class LikedRoute < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :road_trip, optional: true
end
