module Api
  class UsersController < ApplicationController
    before_action :require_signed_in!, only: [:update]

    def create
      @user = User.new(user_params)
      if @user.save
        sign_in(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def update
      @user = current_user

      if @user.update(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.includes(:cupping_sessions).find(params[:id])
      # @user = User.includes(:cupping_sessions).where(:id => params[:id]).first
    end

    def index
      @users = User.all
    end

    private
    def user_params
      params.require(:user).permit(:email, :username, :password)
    end
  end
end
