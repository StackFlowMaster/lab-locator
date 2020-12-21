class DropLatAndLongFromStudios < ActiveRecord::Migration[6.0]
  def change
    remove_column :studios, :lat
    remove_column :studios, :long
  end
end
