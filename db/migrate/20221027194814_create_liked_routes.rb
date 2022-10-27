class CreateLikedRoutes < ActiveRecord::Migration[7.0]
  def change
    create_table :liked_routes do |t|
      t.integer :user_id
      t.integer :road_trip_id

      t.timestamps
    end
  end
end
