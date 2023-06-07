require 'active_record'

class List < ActiveRecord::Base
    belongs_to :user
    has_many :list_items
    has_and_belongs_to_many :jobs
      
end