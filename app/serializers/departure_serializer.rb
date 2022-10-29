class DepartureSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :city
  belongs_to :road_trip
end
