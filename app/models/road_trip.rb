class RoadTrip < ApplicationRecord
    belongs_to :user
    
    has_one :start, through: :departure, source: :location
    has_many :stops, through: :pit_stops, source: :location, dependent: :destroy
    has_one :destination, class_name: "Location", foreign_key: "destination_id", dependent: :destroy
    
    has_many :cities, through: :pit_stops
    has_many :states, through: :cities
    
    paginates_per 25

    
    # named_scope :ordered, lambda {|args| (args.first || "created_at DESC")}
end
