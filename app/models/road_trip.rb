class RoadTrip < ApplicationRecord
    belongs_to :user

    has_one :departure
    has_many :pit_stops
    has_one :destination
    
    has_many :cities, through: :pit_stops
    has_many :states, through: :cities

    validates :trip_name, presence: true, length: { minimum: 4 }
    
    # paginates_per 25
    
    # named_scope :ordered, lambda {|args| (args.first || "created_at DESC")}
end
