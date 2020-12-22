class RemoveRecommendFromReviewsTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :recommend
  end
end
