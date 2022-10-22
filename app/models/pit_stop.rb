class PitStop < ApplicationRecord
    has_many :users, through: :favorite_stop
end
