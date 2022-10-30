class DeparturesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    before_action only: [:create]

    def create
        user = User.find_by!(id: session[:user_id])
        trip = user.road_trips.find_by(id: params[:road_trip_id])
        state = State.find_or_create_by(name: params[:state_name])
        if state.cities.where(name: params[:city_name]).empty?
            city = state.create_city!(name: params[:city_name])
        else 
        end
        departure = trip.create_departure!(city_id: city.id)
        render json: departure
    end

private

    def departure_params
        params.permit(:location_name, :city_id)
    end

    def verify_user
        user = User.find_by!(id: session[:user_id])
    end

    def find_city
        City.find_or_create_by(name: params[:city_name])
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

end