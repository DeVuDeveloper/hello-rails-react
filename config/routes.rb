Rails.application.routes.draw do
  get 'static/index'
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings', to: 'greetings#index'
  end
  root "static#index"
end
