class Api::ProductsController < ApplicationController
    before_action :set_seller, except: [:all_products, :by_category]
    before_action :set_product, only: [:show, :destroy, :update]
    before_action :set_page, only: [:by_category]
    
    def all_products
        render json: Product.all
    end

    def by_category
        products = Product.by_category(params[:category])
        products = Kaminari.paginate_array(products).page(@page).per(5)
        render json: {products:products, total_pages: products.total_pages}
    end
    
    def index
        render json: @seller.products
    end
    
    def show
        render json: @product
    end
    
    def create
        @product = @seller.products.new(product_params)
        if(@product.save)
            render json: @product
        else
            render json @product.errors.full_messages, status:422
        end
    end
    
    def update
        if(@product.update(product_params))
            render json: @product
        else
            render json: @product.errors.full_messages, status: 422
        end
    end
    
    def destroy
        render json: @product.destroy
    end
    
    private
    def set_seller
        @seller = Seller.find(params[:seller_id])
    end
    def set_product
        @product = @seller.products.find(params[:id])
    end
    def product_params
        params.require(:product).permit(:price, :description, :category, :seller_id)
    end
    def set_page
        @page = params[:page] || 1
    end
end
