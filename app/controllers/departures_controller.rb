class DeparturesController < ApplicationController


private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def road_trip_params(city, state)
        params.permit(:name, departure: { :lat => :lng => city_id => city.id => departure_city = city.name => departure_state = state.name => state_id = state.id })
    end

end