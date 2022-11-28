class RoadTripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    def filter_by_length
        case params[:format]
            when "DESC"
                road_trips = RoadTrip.all.sort{ |a,b| b.road_trip_distance_miles.to_i <=> a.road_trip_distance_miles.to_i }
            when "ASC"
                road_trips = RoadTrip.all.sort{ |a,b| a.road_trip_distance_miles.to_i <=> b.road_trip_distance_miles.to_i }
            else
        end
        render json: road_trips
    end

    def search
        road_trips = RoadTrip.select { |trip| trip.name.include?(params[:trip_name]) }
        # byebug
        render json: road_trips
    end

    def create
        user = find_user
        state = State.find_or_create_by(name: params[:state])
        city = City.find_or_create_by(name: params[:city]) do |city|
            city.state_id = state.id
        end
        trip = user.road_trips.create(road_trip_params(city, state))
        render json: user
    end

    def show
        user = find_user
        trip = find_trip(user)
        render json: trip
    end

    def destroy
        user = find_user
        trip = find_trip(user)
        trip.delete
        render json: user
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def find_trip(user)
        user.road_trips.find_by(creator_id: params[:id])
    end

    def find_city(state)
        state.cities.find_by(name: params[:city])
    end

    def road_trip_params(city, state)
        params.permit(:name, departure_params: {city_id: city.id, departure_city: city.name, departure_state: state.name, state_id: state.id, lat: params[:coordinates][:lat], lng: params[:coordinates][:lng]})
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end


end
