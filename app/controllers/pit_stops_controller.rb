class PitStopsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unauthorized_response
    before_action :verify_user

    def create
        user = find_user
        trip = find_road_trip(user)
        stop = trip.pit_stops.create(pit_stop_params)
        stop.user = user
        stop.save!
        render json: user
    end

    def update
        user = find_user
        stop = find_pit_stop(user)
        state = find_or_create_state
        city = find_or_create_city(state)
        stop.update!(location_name: params[:location_name], stop_city: city.name, stop_state: state.name, lat: params[:lat], lng: params[:lng], city_id: city.id, state_id: state.id)
        render json: user
    end

    def destroy
        user = find_user
        pit_stop = find_pit_stop(user)
        pit_stop.destroy
        render json: user
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def verify_user
        user = find_user
    end

    def find_road_trip(user)
        user.road_trips.find_by!(id: params[:road_trip_id])
    end

    def pit_stop_params
        params.permit(:location_name, :city_name, :state_name, :lat, :lng)
    end

    def find_pit_stop(user)
        trip = find_road_trip(user)
        trip.pit_stops.find_by!(id: params[:id])
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

end
