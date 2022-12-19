class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :location_name
      t.integer :city_id
      t.integer :state_id
      t.string :city_name
      t.string :state_name
      t.integer :road_trip_id
      t.references :departure
      t.references :pit_stop
      t.references :destination
      t.decimal :lat, precision: 15, scale: 10
      t.decimal :lng, precision: 15, scale: 10

      t.timestamps
    end
  end
end