# frozen_string_literal: true

# Table - a playing 5 x 5 surface that contains the robot
class Table < ApplicationRecord
  has_one :robot
end
