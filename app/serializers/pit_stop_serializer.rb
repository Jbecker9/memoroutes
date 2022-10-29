class PitStopSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :city
  belongs_to :road_trip
end
