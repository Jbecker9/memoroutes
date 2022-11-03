class DestinationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    before_action :require_user, only: [:create]

    def create
        user = find_user
        trip = user.road_trips.find_by(id: params[:road_trip_id])
        byebug
        dest = trip.destination.create(destination_params)
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
