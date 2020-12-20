class StudioSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :hourly_rate
end
