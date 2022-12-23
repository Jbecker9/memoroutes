class Destination < ApplicationRecord
    belongs_to :user

    belongs_to :city
    belongs_to :state

private

end
