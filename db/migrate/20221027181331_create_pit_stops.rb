class CreatePitStops < ActiveRecord::Migration[7.0]
  def change
    create_table :pit_stops do |t|
      t.string :location_name
      t.string :latitude
      t.string :longitude
      t.integer :city_id
      t.integer :state_id
      t.integer :road_trip_id

      t.timestamps
    end
  end
end
