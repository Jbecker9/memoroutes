class Departure < ApplicationRecord
    belongs_to :city
    belongs_to :stop_format, polymorphic: true
end
