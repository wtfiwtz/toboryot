# frozen_string_literal: true

# RobotsController - controller for manipulating and reporting on a robot on the table (keyed to the user's session)
class RobotsController < ApplicationController
  before_action :set_table
  before_action :set_robot, except: [:create, :index, :left, :right, :move]

  def index
    render json: { robot: @table.robot }
  end

  def create
    raise ActionController::BadRequest, 'Robot already placed' if @table.robot
    @robot = @table.create_robot!(robot_params)
    render json: { robot: @robot }
  end

  def destroy
    @table.robot.destroy!
    head :no_content
  end

  def left
    render json: @table.robot
  end

  def right
    render json: @table.robot
  end

  def move
    render json: @table.robot
  end

  private

  def set_table
    @table = Table.find_by!(session: params[:table_id])
  end

  def set_robot
    @robot = @table.robot
  end

  def robot_params
    params.permit(:x, :y, :f)
  end
end
