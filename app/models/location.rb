class Location < ApplicationRecord
    belongs_to :city
    belongs_to :state
    belongs_to :departure, class_name: "RoadTrip"
    belongs_to :pit_stop, class_name: "RoadTrip"
    belongs_to :destination, class_name: "RoadTrip"
end
