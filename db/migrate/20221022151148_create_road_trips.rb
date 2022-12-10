class CreateRoadTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :road_trips do |t|
      t.string :trip_name
      t.bigint :creator_id
      t.string :road_trip_distance_miles
      
      t.timestamps
    end
  end
end
