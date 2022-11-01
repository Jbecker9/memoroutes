class DepartureSerializer < ActiveModel::Serializer
  attributes :id, :city, :state
  belongs_to :state
  belongs_to :city
  belongs_to :road_trip
end
