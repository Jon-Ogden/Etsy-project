class Api::SellersController < ApplicationController
    before_action :set_seller, only: [:show, :update, :destroy]

    def index
        render json: Seller.all
    end

    def show
        render json: @seller
    end

    def destroy
        render json: @seller.destroy
    end

    def create
        seller = Seller.new(seller_params)
        if(seller.save)
            render json: seller
        else
            render json: seller.errors.full_messages, status:422
        end
    end

    def update
        if @seller.update(seller_params)
            render json: @seller
        else 
            render json:{errors: @seller.errors.full_messages}, status:422
        end
    end

    private
    def set_seller
        @seller = Seller.find(params[:id])
    end
    def seller_params
        return params.require(:seller).permit(:name, :email)
    end
end
