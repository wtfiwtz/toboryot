# frozen_string_literal: true

require_relative 'boot'
require 'rails/all'

Bundler.require(*Rails.groups)

module Toboryot
  class Application < Rails::Application
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :options]
      end
    end
  end
end

Rails.application.config.after_initialize do
  Random.srand(Digest.hexencode("0x#{Rails.application.secrets.secret_key_base[0..12]}").to_i(16) + Time.now.utc.to_i)
end
