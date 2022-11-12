class CreateRoadTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :road_trips do |t|
      t.string :name
      t.bigint :user_id
      t.string :road_trip_distance_miles
      
      t.timestamps
    end
  end
end
