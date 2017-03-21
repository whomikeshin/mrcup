Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index] do
      resources :cupping_sessions, only: [:create, :destroy, :show, :update, :index] do
        resources :samples, only: [:create, :destroy, :show, :update, :index]
      end
    end

    resource :session, only: [:create, :destroy, :show]

  end
end
