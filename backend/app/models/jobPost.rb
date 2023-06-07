require 'active_record'

class JobPost < ActiveRecord::Base
    has_many :skills
    belongs_to :user
    has_many :job_posts
    has_many :users, through: :job_posts
    has_and_belongs_to_many :lists
    # belongs_to :user
end