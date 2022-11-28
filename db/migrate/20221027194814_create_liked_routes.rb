class CreateLikedRoutes < ActiveRecord::Migration[7.0]
  def change
    create_table :liked_routes do |t|
      t.integer :liked_trip_id
      t.integer :user_like_id

      t.timestamps
    end
  end
end
