class City < ApplicationRecord
    has_many :locations, as: city_state
end
