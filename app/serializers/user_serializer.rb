class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :created_at
  has_many :created_trips
  has_many :liked_routes
end
