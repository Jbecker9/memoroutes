class RoadTrip < ApplicationRecord
    belongs_to :user

    has_one :departure, dependent: :destroy
    has_many :pit_stops, dependent: :destroy
    has_one :destination, dependent: :destroy

    accepts_nested_attributes_for :departure

    validates :trip_name, presence: true, length: { minimum: 4 }
    
end
