class DepartureSerializer < ActiveModel::Serializer
  attributes :id, :location_name, :lat, :lng
  
  belongs_to :user

  belongs_to :city
  belongs_to :state
end
