class PitStopSerializer < ActiveModel::Serializer
  attributes :id, :stop_name, :lat, :lng
  belongs_to :city
  belongs_to :road_trip
end
