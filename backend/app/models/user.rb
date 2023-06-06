require 'active_record'

class User < ActiveRecord::Base
  has_secure_password
  has_many :job_posts
  has_many :skills
  has_many :lists

  # attr_accessor :username, :email, :password_hash

  # def initialize(username, email, password)
  #   @username = username
  #   @email = email
  #   @password_hash = Password.create(password)
  # end

  # def add_job(job)
  #   jobs << job
  #   # update the db with the added job
  # end

  # def listed_jobs
  #   jobs
  #   # retrieve the associated jobs from db
  # end

end
