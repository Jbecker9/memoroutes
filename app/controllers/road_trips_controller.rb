class RoadTripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    # before_action :validates_user, only: [:create, :destroy]


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
        render json: road_trips
    end

    def create
        user = find_user
        trip = user.road_trips.create!(trip_params)
        state = find_or_create_state
        city = find_or_create_city(state)
        departure = trip.create_departure(state_id: state.id, city_id: city.id, lat: params.permit[:departure_lat], lng: params.permit[:departure_lng])
        render json: user
    end

    def show
        user = find_user
        trip = user.created_trips.find_by(id: params[:id])
        # byebug
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

    def trip_params
        params.permit(:trip_name, departure_attributes: {:lat, :lng})
    end
    
    # def validates_user
    #     unless params[:user_id] = session[:user_id]
    #         flash[:error] = "Unauthorized User"
    #     end
    # end

    def find_trip(user)
        user.road_trips.find_by(creator_id: params[:id])
    end

    def find_or_create_state
        State.find_or_create_by(state_name: params[:state_name])
    end

    def find_or_create_city(state)
        state.cities.where(city_name: params[:city_name]).first_or_create
    end

    def road_trip_params
        params.require(:road_trip).permit(:trip_name, :city_name, :state_name, departure: [ :lat, :lng ])
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
