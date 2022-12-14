class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid Username or Password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        render json: { error: "Not Authorized" }, status: :unauthorized
    end

private

    def verify_user
        user = User.find_by(id: session[:user_id])
    end
    
end
