class RoadTripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    
    def index
        road_trips = RoadTrip.all
        render json: road_trips
    end

    def create
        user = find_user
        trip = user.road_trips.create(road_trip_params)
        state = State.find_or_create_by(name: params[:state])
        if find_city(state)
            city = find_city(state)
            departure = trip.create_departure(city_id: city.id)
        else
            city = state.cities.create(name: params[:city])
            departure = trip.create_departure(city_id: city.id)
        end
        render json: user
    end

private

    def road_trip_params
        params.permit(:name)
    end

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def find_city(state)
        state.cities.find_by(name: params[:city])
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
