class RoadTrip < ApplicationRecord
    belongs_to :creator, class_name: "User", foreign_key: "creator_id"
    has_many :liked_routes, foreign_key: :liked_route_id
    has_many :likes, through: :liked_routes, source: :liked_trip
    has_one :departure, dependent: :destroy
    has_many :pit_stops, -> { order(id: :asc) }, dependent: :destroy
    has_one :destination, dependent: :destroy
    accepts_nested_attributes_for :departure
    paginates_per 25
    # named_scope :ordered, lambda {|args| (args.first || "created_at DESC")}
end
