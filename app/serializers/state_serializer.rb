class StateSerializer < ActiveModel::Serializer
  attributes :id, :state_name
  has_many :cities, serializer: StateCitySerializer
end
