class CreateLocationDepartures < ActiveRecord::Migration[7.0]
  def change
    create_table :location_departures do |t|

      t.timestamps
    end
  end
end
