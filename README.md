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

rails s -p 3001 (or whichever port)

To prevent the need for 'prop drilling' and other challenges related to state, this app uses Redux; for an example of a similar project using regulr React please see an alternative framework I created here: https://github.com/seligmar/Campaign-2020

# Prerequisites

What things you need to install the software and how to install them

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

# Running the tests

Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

# Give an example

And coding style tests
Explain what these tests test and why

# Give an example

Deployment
Add additional notes about how to deploy this on a live system

# Built With

Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

https://github.com/sweetalert2/sweetalert2-react-content - alerts

https://github.com/CookPete/react-player - react player github

https://react.semantic-ui.com/ styling suplimented with semantic ui, specifically the css package

https://www.npmjs.com/package/react-twitter-embed - embeded tweets

# Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

# Authors

Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

# License

This project is licensed under the MIT License - see the LICENSE.md file for details

# Acknowledgments

Hat tip to anyone whose code was used
Inspiration
etc

"Parks and Recreation" is a production of Deedle-Dee Productions, Fremulon, 3 Arts Entertainment and Universal Television. Along with Daniels and Schur, Howard Klein ("The Office") and David Miner ("30 Rock"), Daniel J. Goor (Late Night with Conan O'Brien") and Morgan Sackett ("Seinfeld") also serve as executive producers for the series. https://www.nbc.com/parks-and-recreation
