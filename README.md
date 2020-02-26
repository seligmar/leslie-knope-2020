https://gist.github.com/PurpleBooth/109311bb0361f32d87a2

# Leslie Knope 2020

This app aims to provide an open-source template for individuals running for office to launch their own websites. The app uses React and a Rails API, and takes Leslie Knope of Parks and Recreation fame as a stand-in-candidate.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

This project uses bcrypt with a username and one-way hashed encryption using bcrypt

You may need to manually activate
gem 'rack-cors'
gem 'bcrypt', '~> 3.1.7'
and then run bundle install again.

You will also need to enable cors here:
leslie-knope-2020/back-end/config/initializers/cors.rb;

# When a decision is made about access eg creating a seperate type of administrative user, that file will have to be changed!

rails s -p 3001 (or whichever port)

To prevent the need for 'prop drilling' and other challenges related to state, this app uses Redux; for an example of a similar project using regulr React please see an alternative framework I created here: https://github.com/seligmar/Campaign-2020

# Prerequisites

What things you need to install the software and how to install them

To launch the app, you will need to run both

`bundle install`

and

`npm start`

To launch the APIs called as currently written will require that you run:

`rails s -p 3001`

You will also need to request a Google API key to include a Google Map.

To include the Google Map functionality, you will need to aquire a Google API key and create a file to gitnore. Informaiton about how to do so is available here:

https://gist.github.com/derzorngottes/3b57edc1f996dddcab25

# Give examples

Installing
A step by step series of examples that tell you how to get a development env running

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

# Give an example

And coding style tests
Explain what these tests test and why

# Give an example

Deployment
Add additional notes about how to deploy this on a live system

# Built With

https://guides.rubyonrails.org/ - Ruby on Rails

https://github.com/sweetalert2/sweetalert2-react-content - alerts

https://github.com/CookPete/react-player - react player github

https://react.semantic-ui.com/ styling suplimented with semantic ui, specifically the css package

https://www.npmjs.com/package/react-twitter-embed - embeded tweets

# Authors

Mary Selig

# Acknowledgments

My entire cohort in London (class beginning 07/15/2019) and my instructors throughout the program were remarkable coders and human beings and I am very thankful to have been able to work with all of them.

I additionally referenced the youtube code-alongs of Leigh Halliday and Traversy Media to create the google map.

https://www.youtube.com/watch?time_continue=172&v=Pf7g32CwX_s - Leigh Halliday

https://www.youtube.com/watch?v=pRiQeo17u6c - Traversy Media

Thanks to this: https://github.com/facebook/create-react-app/issues/7183

Thanks too to the StackOverflow Q&A that finally explained why my datetime sorting was reverting all my dates to 01-01-2000
https://stackoverflow.com/questions/12832857/date-reverts-to-2000-01-01-from-activerecord-to-mysql

"Parks and Recreation" is a production of Deedle-Dee Productions, Fremulon, 3 Arts Entertainment and Universal Television. Along with Daniels and Schur, Howard Klein ("The Office") and David Miner ("30 Rock"), Daniel J. Goor (Late Night with Conan O'Brien") and Morgan Sackett ("Seinfeld") also serve as executive producers for the series. https://www.nbc.com/parks-and-recreation

# notes:

I wrote a series of medium posts about the authorization/authentication used in this app:

https://medium.com/@seligmar/authentication-authorization-eb14cd6f94da

https://medium.com/@seligmar/authentication-authorization-2-2f62d8dce2ad

https://medium.com/@seligmar/authentication-authorization-3-a6d30488cf47
