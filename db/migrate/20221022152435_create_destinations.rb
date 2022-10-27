class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :location_name
      t.integer :city_id
      t.references :stop_format, polymorphic: true

      t.timestamps
    end
  end
end
