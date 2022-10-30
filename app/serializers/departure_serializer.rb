class DepartureSerializer < ActiveModel::Serializer
  attributes :id :location_name, :city, :state
  belongs_to :city
  belongs_to :road_trip
end
