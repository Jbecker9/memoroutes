class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :road_trips
end
