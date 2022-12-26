class PitStop < ApplicationRecord
    belongs_to :user
    belongs_to :road_trip

    belongs_to :city
    belongs_to :state

    before_validation :add_city_and_state

private

    def add_city_and_state
        state = State.find_or_create_by!(state_name: self.state_name)
        city = state.cities.find_or_create_by!(city_name: self.city_name)
        self.city = city
        self.state = state
        # byebug
    end

end
