class Api::JobsController < ApplicationController
    before_action :set_job, only: [:show, :update, :destroy]

    def index
      render json: current_user.jobs
    end
  
    def show
      render json: @job
    end
  
    def create
      @job = current_user.jobs.new(job_params)
      if @job.save
        render json: @job
      else
        render json: { errors: @job.errors }, status: :unprocessable_entity
      end
    end
  
    def update
      if @job.update(job_params)
        render json: @job
      else
        render json: { errors: @job.errors }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @job.destroy
      render json: { message: "Job deleted" }
    end
  
    private 
  
      def job_params
        params.require(:job).permit(:name, :version, :bought)
      end
  
      def set_job
        @job = current_user.jobs.find(params[:id])
      end
  end
