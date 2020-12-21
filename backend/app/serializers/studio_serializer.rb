class StudioSerializer < ActiveModel::Serializer
  attributes :id, :name, :imageUrl, :hourlyRate
end
