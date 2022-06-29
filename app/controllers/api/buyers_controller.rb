class Api::BuyersController < ApplicationController
    before_action :set_seller, except: [:all_buyers]
    before_action :set_buyer, only: [:show, :destroy, :update]
    
    def all_buyers
        render json: Buyer.all
    end
    
    def index
        render json: @seller.buyers
    end
    
    def show
        render json: @buyer
    end
    
    def create
        @buyer = @seller.buyers.new(buyer_params)
        if(@buyer.save)
            render json: @buyer
        else
            render json @buyer.errors.full_messages, status:422
        end
    end
    
    def update
        if(@buyer.update(buyer_params))
            render json: @buyer
        else
            render json: @buyer.errors.full_messages, status: 422
        end
    end
    
    def destroy
        render json: @buyer.destroy
    end
    
    private
    def set_seller
        @seller = Seller.find(params[:seller_id])
    end
    def set_buyer
        @buyer = @seller.buyers.find(params[:id])
    end
    def buyer_params
        params.require(:buyer).permit(:name, :max_price, :desired_categories, :seller_id)
    end
end
