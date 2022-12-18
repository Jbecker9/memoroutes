class CreateLocationPitStops < ActiveRecord::Migration[7.0]
  def change
    create_table :location_pit_stops do |t|

      t.timestamps
    end
  end
end
