Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  resources :road_trips, only: [:index, :create, :show] do
    resources :departures, only: [:create]
    resources :destinations, only: [:create]
    resources :pit_stops, only: [:create, :destroy]
  end
  
end
