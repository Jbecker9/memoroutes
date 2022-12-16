class RoadTrip < ApplicationRecord
    belongs_to :user
    has_one :departure, class_name: "Location", foreign_key: "departure_id", dependent: :destroy
    has_many :pit_stops, class_name: "Location", foreign_key: "pit_stop_id", -> { order(id: :asc) }, dependent: :destroy
    has_one :destination, class_name: "Location", foreign_key: "destination_id" dependent: :destroy
    paginates_per 25

    
    # named_scope :ordered, lambda {|args| (args.first || "created_at DESC")}
end
