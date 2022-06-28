class CreateBuyers < ActiveRecord::Migration[7.0]
  def change
    create_table :buyers do |t|
      t.string :name
      t.float :max_price
      t.string :desired_categories
      t.belongs_to :seller, null: false, foreign_key: true

      t.timestamps
    end
  end
end
