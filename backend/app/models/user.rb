require 'active_record'

class User < ActiveRecord::Base
  has_many :job_posts
  has_many :skills
  has_many :lists

  attr_accessor :username, :email, :password_hash

  def initialize(username, email, password)
    @username = username
    @email = email
    @password_hash = Password.create(password)
  end

  def add_job(job)
    jobs << job
    # Code to update the database with the added job
  end

  def listed_jobs
    jobs
    # Code to retrieve the associated jobs from the database
  end

end
