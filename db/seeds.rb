# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
status = ['applied', 'wishlist', 'interviewed', 'offered', 'rejected']

10.times do 
 Job.create(
  company: Faker::Company.name,
  title: Faker::Company.industry,
  salary: Faker::Number.decimal(l_digits: 2),
  location: Faker::Address.city,
  startApply: Faker::Date.in_date_period,
  description: Faker::Quote.yoda,
  status: status.sample,
  user_id: 1,
  )
end

puts Job.count

