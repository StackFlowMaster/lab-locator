class Studio < ApplicationRecord
   has_many :reviews
   has_many :users, through: :reviews
   self.per_page = 3
end
