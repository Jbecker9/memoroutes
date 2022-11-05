class DestinationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    before_action :require_user, only: [:create]

    def create
        user = find_user
        trip = user.road_trips.find_by(id: params[:road_trip_id])
        state = State.find_or_create_by(name: params[:state])
        city = City.find_or_create_by(name: params[:city]) do |city|
            city.state_id = state.id
        end
        dest = trip.create_destination(city_id: city.id, state_id: state.id, destination_city: city.name, destination_state: state.name, lat: params[:coordinates][:lat], lng: params[:coordinates][:lng]).save
        # byebug
        render json: user
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def require_user
        user = User.find_by!(id: session[:user_id])
    end
    
    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

end
