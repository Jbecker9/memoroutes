class Destination < ApplicationRecord
    belongs_to :city
    belongs_to :stop_format, polymorphic: true, optional: true 
end
