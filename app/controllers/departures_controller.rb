class DeparturesController < ApplicationController
    before_action :validates_existing_user, only: [:create]

    def create
        user = find_user
        
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def road_trip_params(city, state)
        params.permit(:name, departure: { :lat => :lng => city_id => city.id => departure_city = city.name => departure_state = state.name => state_id = state.id })
    end

    def validates_existing_user
        unless session[:user_id]
            flash[:error] = "User Must Exist"
        end
    end

end