require 'active_record'

class User < ActiveRecord::Base
  has_secure_password
  has_many :job_posts
  has_many :skills
  has_many :lists

end
