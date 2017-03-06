class BasicTables < ActiveRecord::Migration[5.1]
  def change
    create_table :tables do |t|
      t.integer :session
    end

    create_table :robots do |t|
      t.integer :x
      t.integer :y
      t.integer :f
      t.references :table, foreign_key: true
    end
  end
end
