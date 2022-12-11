class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_unauthorized_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def show
        user = find_user
        render json: user
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

private

    def find_user
        User.find_by!(id: session[:user_id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def render_unauthorized_response
        render json: { error: "Not Authorized" }, status: :unauthorized 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
