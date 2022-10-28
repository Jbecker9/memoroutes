class RoadTripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    
    def index
        road_trips = RoadTrip.all
        render json: road_trips
    end

    def create
        user = find_user
        number_of_trips = user.road_trips.length
        trip = user.road_trips.create(name: "Road Trip ##{number_of_trips + 1}", user_id: session[:user_id])
        render json: user
    end

private

    def permit_params
        params.permit(:name, :creator_id)
    end

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
