class Seller < ApplicationRecord
    has_many :Buyers
    has_many :Products, dependent: :destroy
end
