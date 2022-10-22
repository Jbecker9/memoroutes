class Location < ApplicationRecord
    belongs_to :location_format
    belongs_to :city_state, polymorphic: true
end
