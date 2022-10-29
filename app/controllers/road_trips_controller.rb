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
        new_trip = user.road_trips.create(road_trip_params)
        render json: user
    end

private

    def road_trip_params
        params.permit(:name)
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
