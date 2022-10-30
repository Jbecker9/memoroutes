class RoadTripSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure, :destination
  belongs_to :user
  has_one :departure
  has_many :pit_stops
  has_one :destination
end
