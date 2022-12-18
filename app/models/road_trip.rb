class RoadTrip < ApplicationRecord
    belongs_to :user
    belongs_to :location
    
    has_many :cities, through: :pit_stops
    has_many :states, through: :cities
    
    paginates_per 25

    
    # named_scope :ordered, lambda {|args| (args.first || "created_at DESC")}
end
