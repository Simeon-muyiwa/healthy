class HeartsController < ApplicationController
	def index
		render json: Heart.all
	end
	
	def show
		render json: Heart.find(params[:id])
	end

	def create
	  render json: Heart.create(heart_params)
	end

	def update
		render json: Heart.find(params[:id]).tap {|h| h.update_attributes(heart_params)}
	end

 private
  def heart_params
  	params.require(:heart).permit(:name, :body)
  end

	
end
