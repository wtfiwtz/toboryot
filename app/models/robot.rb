# frozen_string_literal: true

# Robot - model that represents the robot's position and facing direction
class Robot < ApplicationRecord
  belongs_to :table

  enum f: { north: 1, east: 2, south: 3, west: 4 }

  validates :x, presence: true, numericality: true,
            inclusion: { in: 0..4, message: 'position - you must stay on the board!' }
  validates :y, presence: true, numericality: true,
            inclusion: { in: 0..4, message: 'position - you must stay on the board!' }
  validates :f, presence: true

  def left!
    self.f = case f
             when 'north' then :west
             when 'west'  then :south
             when 'south' then :east
             when 'east'  then :north
             end
    save!
  end

  def right!
    self.f = case f
             when 'north' then :east
             when 'west'  then :north
             when 'south' then :west
             when 'east'  then :south
             end
    save!
  end

  def forward!
    dx, dy = case f
             when 'north' then [0, 1]
             when 'west'  then [-1, 0]
             when 'south' then [0, -1]
             when 'east'  then [1, 0]
             end
    self.x += dx
    self.y += dy
    save!
  end
end
