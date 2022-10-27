class CreateRoadTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :road_trips do |t|
      t.string :name
      t.integer :creator_id

      t.timestamps
    end
  end
end
