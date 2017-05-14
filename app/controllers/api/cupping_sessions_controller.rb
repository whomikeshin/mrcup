module Api
  class CuppingSessionsController < ApplicationController
    def create
      @cupping_session = CuppingSession.new(cupping_params)
    end

    def show
      @cupping_session = CuppingSession.includes(:samples).find(params[:id])
    end

    def destroy
      @cupping_session = CuppingSession.find(params[:id])

      if @cupping_session
        @cupping_session.destroy
        render :show
      else
        render json: ["Cupping sessions does not exist"], status: 422
      end
    end

    def update
      @cupping_session = CuppingSession.find(params[:id])
      if @cupping_session.update(cupping_params)
        render :show
      else
        render json: @cupping_session.errors.full_messages, status: 422
      end
    end

    def index
      @cupping_sessions =
        CuppingSession.all
          .includes(:samples)

      render :index
    end

    private
    def cupping_params
      params.require(:cupping_session).permit(:name, :cups, :blind)
    end
  end
end
