class User < ApplicationRecord
    has_secure_password
    
    validates :username, uniqueness: true
    
    has_many :created_trips, foreign_key: :creator_id, class_name: "RoadTrip"
    has_many :liked_routes, foreign_key: :user_like_id
    has_many :likes, through: :liked_routes
end
