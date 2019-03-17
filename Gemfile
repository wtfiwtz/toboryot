# frozen_string_literal: true

source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# gem 'bcrypt'
gem 'brakeman'
gem 'coffee-rails'
gem 'jbuilder'
gem 'jquery-rails'
gem 'pg'
gem 'puma'
gem 'rails', '~> 5.2'
# gem 'redis'
gem 'rack-cors', require: 'rack/cors'
gem 'rubocop'
# gem 'sqlite3'
gem 'sass-rails'
gem 'sprockets', '>= 4.0.0.beta4'
# gem 'therubyracer', platforms: :ruby
gem 'turbolinks'
gem 'uglifier'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rails-controller-testing'
  gem 'rspec-rails'
end

group :development do
  gem 'capistrano-rails'
  gem 'listen'
  gem 'spring'
  gem 'spring-watcher-listen'
  gem 'web-console'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
