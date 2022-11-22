class StateCitySerializer < ActiveModel::Serializer
  attributes :id, :name, :departures, :pit_stops, :destinations
  belongs_to :state
  has_many :departures
  has_many :pit_stops
  has_many :destinations
end
