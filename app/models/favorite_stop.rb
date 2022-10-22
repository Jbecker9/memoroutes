class FavoriteStop < ApplicationRecord
    belongs_to :user
    belongs_to :pit_stop
end
