class Seller < ApplicationRecord
    has_many :Products, dependent: :destroy
end
