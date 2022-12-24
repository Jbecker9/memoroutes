Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  resources :states, only: [:index]

  resources :road_trips, only: [:create, :show, :destroy] do
    resources :destinations, only: [:create]
    resources :pit_stops, only: [:create, :update, :destroy]
  end
  
  get '/road_trips/filter_by_length/:format', to: 'road_trips#filter_by_length'
  get '/road_trips/search/:trip_name', to: 'road_trips#search'
  
end
