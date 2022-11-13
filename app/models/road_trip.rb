class RoadTrip < ApplicationRecord
    belongs_to :user
    has_one :departure, dependent: :destroy
    has_many :pit_stops, -> { order(id: :asc) }, dependent: :destroy
    has_one :destination, dependent: :destroy
    paginates_per 25
    # named_scope :ordered, lambda {|args| (args.first || "created_at DESC")}
end
