class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.references :location_format, polymorphic: true
      t.references :city_state, polymorphic: true
      t.integer :user_id
      
      t.timestamps
    end
  end
end
