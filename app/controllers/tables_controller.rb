# frozen_string_literal: true

# TablesController - controller for generating a new table (mapped to an anonymous or user session)
class TablesController < ApplicationController
  before_action :set_table, except: [:create]

  MAX_SESSION = 2**31

  def show
    render json: @table
  end

  def create
    session = Random.rand(MAX_SESSION)
    @table = Table.create!(session: session)
    render json: @table
  end

  def destroy
    @table.destroy!
    head :no_content
  end

  private

  def set_table
    @table = Table.find_by!(session: params[:id])
  end
end
