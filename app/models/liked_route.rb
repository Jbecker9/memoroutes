class LikedRoute < ApplicationRecord
    belongs_to :liked_trip, class_name: "RoadTrip"
    belongs_to :user_like, class_name: "User"
end
