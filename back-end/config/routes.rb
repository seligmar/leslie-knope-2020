Rails.application.routes.draw do

  post '/signin', to: 'users#signin'
  post '/new', to: 'users#new'
  get "/validate", to: "users#validate"

  get '/events', to: "events#index"
  post '/create-event', to: "events#new"

end
