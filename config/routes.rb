Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]

    resource :session, only: [:create, :destroy, :show]

    resources :cupping_sessions, only: [:create, :destroy, :show, :update, :index]

    resources :samples, only: [:create, :destroy, :show, :update]
  end
end
