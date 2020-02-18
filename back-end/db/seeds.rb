# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Mary', password: 'password')

events = [{
  datetime: 
  "2020-04-18 18:00:000Z",
street_address: '421 W 27th St NW', 
city: 'Winston-Salem', 
state: 'NC', 
zip: '27105', 
lat: 36.124180, 
lng: -80.253630, 
title: 'KNOPE FOR PRESIDENT'
}, 

{datetime: 
"2020-05-20 07:00:000Z",
street_address: '11 Meserole St', 
city: 'Brooklyn', 
state: 'NY', 
zip: '11206', 
lat: 40.707661, 
lng: -73.949928, 
title: 'NORTH BROOKLYN FOR KNOPE PHONE BANK'
} , 

{datetime: 
"2020-02-20 07:00:000Z",
street_address: '11 Meserole St', 
city: 'Brooklyn', 
state: 'NY', 
zip: '11206', 
lat: 40.707661, 
lng: -73.949928, 
title: 'NORTH BROOKLYN FOR KNOPE PHONE BANK'
} 
]

Event.create events 