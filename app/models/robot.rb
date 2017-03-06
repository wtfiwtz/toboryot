# frozen_string_literal: true

# Robot - model that represents the robot's position and facing direction
class Robot < ApplicationRecord
  belongs_to :table

  enum f: { north: 1, east: 2, south: 3, west: 4 }

  validates :x, presence: true, numericality: true, inclusion: 0..4
  validates :y, presence: true, numericality: true, inclusion: 0..4
  validates :f, presence: true
end
