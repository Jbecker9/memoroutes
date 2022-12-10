class CreateDepartures < ActiveRecord::Migration[7.0]
  def change
    create_table :departures do |t|
      t.integer :city_id
      t.integer :state_id
      t.integer :road_trip_id
      t.decimal :lat, precision: 15, scale: 10
      t.decimal :lng, precision: 15, scale: 10

      t.timestamps
    end
  end
end
