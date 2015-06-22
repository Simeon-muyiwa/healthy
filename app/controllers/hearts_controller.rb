class HeartsController < ApplicationController
	def index
		render json: Heart.all
	end
	
	def show
		render json: Heart.find(params[:id])
	end
	
end
