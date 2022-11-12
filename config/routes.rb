Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  get '/road_trips/:format', to: 'road_trips#index'

  resources :road_trips, only: [:create, :show, :destroy] do
    resources :departures, only: [:create]
    resources :destinations, only: [:create]
    resources :pit_stops, only: [:create, :update, :destroy]
  end
  
end
