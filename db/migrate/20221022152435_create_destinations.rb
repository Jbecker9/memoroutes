class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.integer :city_id
      t.integer :state_id
      t.integer :road_trip_id
      t.string :destination_city
      t.string :destination_state
      t.decimal :lat, precision: 16, scale: 14
      t.decimal :lng, precision: 16, scale: 14

      t.timestamps
    end
  end
end
