class DeparturesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
    before_action only: [:create]

    def create
        user = User.find_by!(id: session[:user_id])
        trip = user.road_trips.find_by(id: params[:road_trip_id])
        byebug
    end

private

def verify_user
    user = User.find_by!(id: session[:user_id])
end

def find_city
    # City.find_or_create_by(name:)
end

def render_unauthorized_response
    render json: { error: "Not Authorized" }, status: :unauthorized 
end

end
