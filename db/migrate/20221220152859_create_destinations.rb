class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :location_name
      t.integer :city_id
      t.string :city_name
      t.integer :state_id
      t.string :state_name
      t.integer :road_trip_id
      t.integer :user_id
      t.decimal :lat, precision: 15, scale: 10
      t.decimal :lng, precision: 15, scale: 10

      t.timestamps
    end
  end
end
