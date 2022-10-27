class RoadTrip < ApplicationRecord
    belongs_to :user
    belongs_to :location_format, polymorphic: true
end
