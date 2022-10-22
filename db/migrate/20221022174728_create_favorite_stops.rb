class CreateFavoriteStops < ActiveRecord::Migration[7.0]
  def change
    create_table :favorite_stops do |t|
      t.integer :user_id
      t.integer :pit_stop_id
      t.timestamps
    end
  end
end
