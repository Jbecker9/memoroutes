Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  post '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  
end
