class PitStopsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unauthorized_response
    before_action :verify_user

    def create
        user = find_user
        trip = user.road_trips.find_by(id: params[:road_trip_id])
        state = State.find_or_create_by(name: params[:state])
        city = City.find_or_create_by(name: params[:city]) do |city|
            city.state_id = state.id
        end
        stop = trip.pit_stops.create(location_name: params[:location_name], stop_city: city.name, stop_state: state.name, city_id: city.id, state_id: state.id, lat: params[:coordinates][:lat], lng: params[:coordinates][:lng])
        # byebug
        render json: user
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def verify_user
        user = find_user
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized
    end

end
