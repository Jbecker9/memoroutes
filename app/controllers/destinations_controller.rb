class DestinationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    before_action :require_user, only: [:create]

    def create
        user = find_user
        trip = user.created_trips.find_by(id: params[:road_trip_id])
        state = find_or_create_state
        city = find_or_create_city(state)
        trip.update!(road_trip_distance_miles: convert_coord_to_distance(trip.departure.lat, trip.departure.lng, params[:lat], params[:lng]))
        dest = trip.create_destination(city_id: city.id, state_id: state.id, city_name: city.city_name, state_name: state.state_name, lat: params[:lat], lng: params[:lng])
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

    def find_or_create_state
        State.find_or_create_by(state_name: params[:state_name])
    end

    def find_or_create_city(state)
        state.cities.where(city_name: params[:city_name]).first_or_create
    end
    
    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

    def convert_coord_to_distance(x1, y1, x2, y2)
        # https://gist.github.com/timols/5268103
        # haversine distance formula
    
        def radian_conversion(coordinate)
          coordinate * ((Math::PI)/180)
        end
    
        departure_lat = x1.to_f
        departure_lng = y1.to_f
        
        destination_lat = x2.to_f
        destination_lng = y2.to_f

        lat_difference = destination_lat - departure_lat
        lng_difference = destination_lng - departure_lng

        lat_radial_arc = radian_conversion(destination_lat - departure_lat)
        lng_radial_arc = radian_conversion(destination_lng - departure_lng)
        
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

        return distance_miles.round
    end
end
