# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Product.destroy_all
Buyer.destroy_all
Seller.destroy_all

s1 = Seller.create(email:'YeeterDefeater@juno.com', name:Faker::FunnyName.name)
s2 = Seller.create(email:'UltraLord@gmail.com', name:Faker::FunnyName.name)
s3 = Seller.create(email:'Stacys-mom@yahoo.com', name:Faker::FunnyName.name)
s4 = Seller.create(email:'irippedmypants@gmail.com', name:Faker::FunnyName.name)
s5 = Seller.create(email:'geemale@gmail.com', name:Faker::FunnyName.name)


5.times do
    name = Faker::Name.name
    max_price = Faker::Number.decimal(l_digits: 2)
    Buyer.create(name: name, max_price: max_price, desired_categories:'clothing, jewelry, art')
end
5.times do
    name = Faker::Name.name
    max_price = Faker::Number.decimal(l_digits: 2)
    Buyer.create(name: name, max_price: max_price, desired_categories:'clothing, art, crafts')
end
5.times do
    name = Faker::Name.name
    max_price = Faker::Number.decimal(l_digits: 2)
    Buyer.create(name: name, max_price: max_price, desired_categories:'crafts, jewelry, decor')
end
5.times do
    name = Faker::Name.name
    max_price = Faker::Number.decimal(l_digits: 2)
    Buyer.create(name: name, max_price: max_price, desired_categories:'decor, crafts, knives')
end
5.times do
    name = Faker::Name.name
    max_price = Faker::Number.decimal(l_digits: 2)
    Buyer.create(name: name, max_price: max_price, desired_categories:'pillows, crafts, art')
end



10.times do
    description = Faker::Restaurant.description
    max_price = Faker::Number.decimal(l_digits: 2)
    s1.Products.create(price: max_price, description: description, category:'clothing')
end
10.times do
    description = Faker::Restaurant.description
    max_price = Faker::Number.decimal(l_digits: 2)
    s2.Products.create(price: max_price, description: description, category:'decor')
end
10.times do
    description = Faker::Restaurant.description
    max_price = Faker::Number.decimal(l_digits: 2)
    s3.Products.create(price: max_price, description: description, category:'crafts')
end
10.times do
    description = Faker::Restaurant.description
    max_price = Faker::Number.decimal(l_digits: 2)
    s4.Products.create(price: max_price, description: description, category:'art')
end
10.times do
    description = Faker::Restaurant.description
    max_price = Faker::Number.decimal(l_digits: 2)
    s5.Products.create(price: max_price, description: description, category:'jewelry')
end

