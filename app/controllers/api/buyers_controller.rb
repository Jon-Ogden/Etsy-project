class Api::BuyersController < ApplicationController
    before_action :set_buyer, only: [:show, :update, :destroy]

    def index
        render json: Buyer.all
    end

    def show
        render json: @buyer
    end

    def destroy
        render json: @buyer.destroy
    end

    def create
        buyer = Buyer.new(buyer_params)
        if(buyer.save)
            render json: buyer
        else
            render json: buyer.errors.full_messages, status:422
        end
    end

    def update
        if @buyer.update(buyer_params)
            render json: @buyer
        else 
            render json:{errors: @buyer.errors.full_messages}, status:422
        end
    end

    private
    def set_buyer
        @buyer = buyer.find(params[:id])
    end
    def buyer_params
        return params.require(:buyer).permit(:name, :max_price, :desired_categories)
    end
end
