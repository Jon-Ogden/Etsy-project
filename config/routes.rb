Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :buyers
    resources :sellers do
      resources :products
    end
    get '/products', to:'products#all_products'
    get '/products/:category', to:'products#by_category'
  end
end
