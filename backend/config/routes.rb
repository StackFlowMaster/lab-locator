Rails.application.routes.draw do
  resources :reviews
  post '/login', to: "sessions#login"
  post '/autologin', to: "sessions#autologin"
  # get 'studios_paginated/:page', to: "studios#paginated_studios"
  resources :users
  resources :studios
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end