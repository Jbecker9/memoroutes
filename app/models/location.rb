class Location < ApplicationRecord
    belongs_to :city
    belongs_to :state

    has_many :road_trips
    has_many :users, through: :road_trips

end
