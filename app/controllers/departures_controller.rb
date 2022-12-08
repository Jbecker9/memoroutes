class DeparturesController < ApplicationController

    def create
        user = find_user
        state = State.find_or_create_by(name: params[:state])
        city = City.find_or_create_by(name: params[:city]) do |city|
            city.state_id = state.id
        end
        trip = user.created_trips.create(road_trip_params(city, state))
        # byebug
        render json: user
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def road_trip_params(city, state)
        params.permit(:name, departure: { :lat => :lng => city_id => city.id => departure_city = city.name => departure_state = state.name => state_id = state.id })
    end

end