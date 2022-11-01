class DeparturesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response

private

    def departure_params
        # params.permit(city_id: city.id, latitude: params[:latitude], longitude: params[:longitude])
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