class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :lat, :lng
  belongs_to :city
  belongs_to :road_trip
end
