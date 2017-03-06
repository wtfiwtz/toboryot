# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :tables, only: [:show, :create, :destroy] do
    resources :robots, only: [:index, :create, :destroy]
  end
end
