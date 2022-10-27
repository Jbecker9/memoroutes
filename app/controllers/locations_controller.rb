class LocationsController < ApplicationController


    def index
        locations = Location.all
        render json: locations
    end
    
    def create
        user = find_user
        byebug
        user.locations.create!(location_params)
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

end
