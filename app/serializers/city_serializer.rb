class CitySerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :state
  has_many :departures
  has_many :pit_stops
  has_many :destinations 
end
