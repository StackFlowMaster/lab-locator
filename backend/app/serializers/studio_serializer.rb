class StudioSerializer < ActiveModel::Serializer
  attributes :id, :name, :imageUrl, :hourlyRate

  def imageUrl
    object.image_url
  end

  def hourlyRate
    object.hourly_rate
  end
  
end
