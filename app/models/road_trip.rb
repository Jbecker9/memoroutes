class RoadTrip < ApplicationRecord
    belongs_to :user
    has_one :departure, dependent: :destroy
    has_many :pit_stops, -> { order(id: :asc) }, dependent: :destroy
    has_one :destination, dependent: :destroy
end
