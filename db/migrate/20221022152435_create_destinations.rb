class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :location_name
      t.integer :city_id
      t.integer :road_trip_id

      t.timestamps
    end
  end
end
