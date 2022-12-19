class User < ApplicationRecord
    has_secure_password
    
    validates :username, uniqueness: true
    

    has_many :road_trips
    has_many :locations, through: :road_trips

end
