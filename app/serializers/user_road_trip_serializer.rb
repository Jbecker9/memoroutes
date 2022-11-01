class UserRoadTripSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure
  has_one :departure
  has_one :destination
  has_many :pit_stops
end
