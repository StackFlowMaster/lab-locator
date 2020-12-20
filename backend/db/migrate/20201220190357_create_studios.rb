class CreateStudios < ActiveRecord::Migration[6.0]
  def change
    create_table :studios do |t|
      t.string :name
      t.string :website
      t.string :image_url
      t.integer :hourly_rate
      t.float :lat
      t.float :long
      t.string :location

      t.timestamps
    end
  end
end
