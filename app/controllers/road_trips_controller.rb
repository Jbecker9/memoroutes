class RoadTripsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    def filter
        # byebug
        road_trips = RoadTrip.order(Arel.sql("road_trip_distance_miles #{params[:format]}"))
        render json: road_trips
    end

    def search
        road_trips = RoadTrip.where(name: params[:trip_name]).limit(25)
        render json: road_trips
    end

    def create
        user = find_user
        trip = user.road_trips.create(name: params[:name])
        state = State.find_or_create_by(name: params[:state])
        city = City.find_or_create_by(name: params[:city]) do |city|
            city.state_id = state.id
        end
        departure = trip.create_departure!(city_id: city.id, departure_city: city.name, departure_state: state.name, state_id: state.id, lat: params[:coordinates][:lat], lng: params[:coordinates][:lng]).save
        render json: user
    end

    def show
        user = find_user
        trip = user.road_trips.find_by(id: params[:id])
        render json: trip
    end

    def destroy
        user = find_user
        trip = user.road_trips.find_by(id: params[:id])
        trip.delete
        render json: user
    end

private

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
