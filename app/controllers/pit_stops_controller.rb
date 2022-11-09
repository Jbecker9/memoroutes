class PitStopsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unauthorized_response
    before_action :verify_user

    def create
        user = find_user
        trip = find_road_trip(user)
        state = find_or_create_state
        city = find_or_create_city(state)
        stop = trip.pit_stops.create(location_name: params[:name], stop_city: city.name, stop_state: state.name, city_id: city.id, state_id: state.id, lat: params[:coordinates][:lat], lng: params[:coordinates][:lng])
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

    def find_pit_stop(user)
        trip = find_road_trip(user)
        trip.pit_stops.find_by!(id: params[:id])
    end

    def find_or_create_state
        State.find_or_create_by(name: params[:state])
    end

    def find_or_create_city(state)
        City.find_or_create_by(name: params[:city]) do |city|
            city.state_id = state.id
        end
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized
    end

end
