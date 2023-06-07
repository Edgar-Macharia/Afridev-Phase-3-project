require 'active_record'

class Skill < ActiveRecord::Base
    has_many :jobs
    has_many :users
end