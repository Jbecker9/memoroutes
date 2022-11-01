class UserRoadTripSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure
  belongs_to :user
  has_one :departure
  has_one :destination
  has_many :pit_stops
end
