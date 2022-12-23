class Departure < ApplicationRecord
    belongs_to :user

    belongs_to :city
    belongs_to :state

    before_validation :add_city_and_state

private

    def add_city_and_state
        state = State.find_or_create_by!(state_name: state_name)
        self.state_id = state.id
        city = state.cities.find_or_create_by!(city_name: city_name)
        self.city_id = city.id
    end
end
