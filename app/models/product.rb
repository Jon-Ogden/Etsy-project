class Product < ApplicationRecord
  belongs_to :seller

  def self.by_category(category)
    Product.find_by_sql(["SELECT p.id, price, description, seller_id, category
      FROM products AS p
      WHERE category = ?", category])
  end
end
