class RoadTripDepartureSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :lat, :lng, :city_name, :state_name
  
  belongs_to :user

  belongs_to :city
  belongs_to :state
end
