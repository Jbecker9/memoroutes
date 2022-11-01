class CreateDepartures < ActiveRecord::Migration[7.0]
  def change
    create_table :departures do |t|
      t.integer :city_id
      t.integer :state_id
      t.integer :road_trip_id
      t.string :departure_city
      t.string :departure_state
      t.string :lat
      t.string :lng

      t.timestamps
    end
  end
end
