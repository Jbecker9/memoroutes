class RoadTrip < ApplicationRecord
    belongs_to :user

    has_one :departure, dependent: :destroy
    has_many :pit_stops
    has_one :destination, dependent: :destroy

    accepts_nested_attributes_for :departure

    validates :trip_name, presence: true, length: { minimum: 4 }
    
    # before_validation :add_city_and_state_to_departure

private

    def add_city_and_state_to_departure
        # Self.departure.state = State.find_or_create_by(state_name: )
    end
    
    # paginates_per 25
    
    # named_scope :ordered, lambda {|args| (args.first || "created_at DESC")}
end
