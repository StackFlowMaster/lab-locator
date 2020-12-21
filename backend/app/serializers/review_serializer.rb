class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :recommend, :username

  def username
    object.user.username
  end


end

