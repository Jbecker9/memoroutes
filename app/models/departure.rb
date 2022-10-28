class Departure < ApplicationRecord
    belongs_to :city
    belongs_to :stop_format, polymorphic: true
    accepts_nested_attributes_for :city, :stop_format
end
