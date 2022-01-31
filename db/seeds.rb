# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@versionArr = ['Founder', 'Gold', 'Normal', 'GOTY', 'Collectors']

5.times do
  Job.create(
    company: Faker::Game.platform,
    startApply: Faker::Date.between(from: '2021-01-01', to: '2022-01-04'),
    version: @versionArr.sample,
    user_id: 1
  )
end

puts Job.count