class RoadTripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    before_action :validates_user, only: [:create, :destroy]

    def filter_by_length
        case params[:format]
            when "DESC"
                road_trips = RoadTrip.all.sort{ |a,b| b.road_trip_distance_miles.to_i <=> a.road_trip_distance_miles.to_i }
            when "ASC"
                road_trips = RoadTrip.all.sort{ |a,b| a.road_trip_distance_miles.to_i <=> b.road_trip_distance_miles.to_i }
            when "Likes"
                road_trips = RoadTrip.all.sort{ |a,b| b.user_likes.to_i <=> a.user_likes.to_i }
            else
        end
        render json: road_trips
    end

    def search
        road_trips = RoadTrip.select { |trip| trip.trip_name.include?(params[:trip_name]) }
        render json: road_trips
    end

    def create
        user = find_user
        trip = user.road_trips.create(trip_params)
        trip.departure.user = user
        # byebug
        trip.save!
        render json: user
    end

    def show
        user = find_user
        trip = user.road_trips.find_by(id: params[:id])
        render json: trip
    end

    def destroy
        user = find_user
        road_trip = user.road_trips.find_by(id: params[:id])
        # byebug
        road_trip.destroy
        render json: user
    end

    def update_likes
        user = find_user
        road_trip = RoadTrip.find_by(id: params[:id])
        road_trip.increment!(:user_likes)
        render json: road_trip
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def validates_user
        user = User.find_by!(id: session[:user_id])
    end

    def trip_params
        params.require(:road_trip).permit(:trip_name, departure_attributes: [:location_name, :lat, :lng, :state_name, :city_name])
    end

    def find_trip(user)
        user.road_trips.find_by(user_id: params[:id])
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
