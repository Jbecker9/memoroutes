class Departure < ApplicationRecord
    belongs_to :road_trip
    belongs_to :user, inverse_of: :departures

    belongs_to :city
    belongs_to :state

    before_validation :add_city_and_state

private

    def add_city_and_state
        state = State.find_or_create_by!(state_name: state_name)
        city = state.cities.find_or_create_by!(city_name: city_name)
        self.city = city
        self.state = state
    end
end
