# frozen_string_literal: true

# ApplicationController - base controller for application
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end
