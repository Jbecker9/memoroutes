class DestinationsController < ApplicationController
    require 'bigdecimal/util'
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :require_user, only: [:create]

    def create
        user = find_user
        trip = user.road_trips.find_by(id: params[:road_trip_id])
        trip.update!(road_trip_distance_miles: convert_coord_to_distance(trip.departure.lat, trip.departure.lng, params[:lat], params[:lng]))
        destination = trip.create_destination(destination_params)
        destination.user = user
        user.road_trips.order(:id)
        destination.save!
        render json: user
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def require_user
        user = User.find_by!(id: session[:user_id])
    end

    def destination_params
        params.require(:destination).permit(:location_name, :city_name, :state_name, :lat, :lng)
    end
    
    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def convert_coord_to_distance(x1, y1, x2, y2)
        # https://gist.github.com/timols/5268103
        # haversine distance formula
    
        def radian_conversion(coordinate)
          coordinate * ((Math::PI)/180)
        end
    
        departure_lat = x1.to_d
        departure_lng = y1.to_d
        
        destination_lat = x2.to_d
        destination_lng = y2.to_d

        lat_difference = destination_lat - departure_lat
        lng_difference = destination_lng - departure_lng

        
        lat_radial_arc = radian_conversion(lat_difference)
        lng_radial_arc = radian_conversion(lng_difference)
        
        haversine_function = 
        (Math::sin(lat_radial_arc / 2) ** 2) +
        Math::cos(radian_conversion(departure_lat)) *
        Math::cos(radian_conversion(destination_lat)) *
        (Math::sin(lng_radial_arc /2) ** 2)
        
        archaversine_method = 
        2 * Math::atan2(Math::sqrt(haversine_function), Math::sqrt(1 - haversine_function)) 
        
        earth_radius_miles = 3958.8
        
        feet_in_mile = 5280
        
        distance_miles = 
        earth_radius_miles * archaversine_method

        return distance_miles.round(2).to_s
    end
end
