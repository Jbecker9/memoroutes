class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.integer :city_id
      t.integer :state_id
      t.integer :road_trip_id
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
