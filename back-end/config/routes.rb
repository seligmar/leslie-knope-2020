Rails.application.routes.draw do

  post '/signin', to: 'users#signin'
  post '/new', to: 'users#new'
  get "/validate", to: "users#validate"

end
