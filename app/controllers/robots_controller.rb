# frozen_string_literal: true

# RobotsController - controller for manipulating and reporting on a robot on the table (keyed to the user's session)
class RobotsController < ApplicationController
  before_action :set_table
  before_action :set_robot, except: [:create, :index]

  def index
    render json: { robot: @table.robot }
  end

  def create
    @robot = @table.create_robot!(robot_params)
    render json: { robot: @robot }
  end

  def destroy
    @table.robot.destroy!
    head :no_content
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
