class CreateLocationDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :location_destinations do |t|

      t.timestamps
    end
  end
end
