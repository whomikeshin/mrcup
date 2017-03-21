module Api
  class SamplesController < ApplicationController
    def create
      @sample = Sample.new(sample_params)
      if @sample.save
        render :show
      else
        render json: @sample.errors.full_messages, status: 422
      end
    end

    def show
      @sample = Sample.find(params[:id])
    end

    def destroy
      @sample = Sample.find(params[:id])

      if @sample
        @sample.destroy
        render :show
      else
        render json: ["Sample does not exist"]. status: 422
      end
    end

    def update
      @sample = Sample.find(params[:id])
      if @sample.update(sample_params)
        render :show
      else
        render json: @sample.errors.full_messages. status: 422
      end
    end

    private
    def sample_params
      params.require(:sample)
    end
  end
end

ActionController::Parameters.permit_all_parameters = true
