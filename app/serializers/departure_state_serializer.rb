class DepartureStateSerializer < ActiveModel::Serializer
  attributes :id, :state_name
  has_many :departures
  has_many :pit_stops
  has_many :destinations
end
