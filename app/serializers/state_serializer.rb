class StateSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :cities, serializer: StateCitySerializer
end
