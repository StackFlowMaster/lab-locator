class StudioShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :website, :imageUrl, :hourlyRate, :location

  def imageUrl
    object.image_url
  end

  def hourlyRate
    object.hourly_rate
  end
end
