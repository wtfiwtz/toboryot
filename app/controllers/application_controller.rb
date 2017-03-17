# frozen_string_literal: true

# ApplicationController - base controller for application
class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session # :exception

  rescue_from ActiveRecord::RecordInvalid, with: :bad_request
  rescue_from ActionController::BadRequest, with: :bad_request
  rescue_from ArgumentError, with: :bad_request

  def bad_request(e)
    render status: :bad_request, json: { error: e.message }
  end
end
