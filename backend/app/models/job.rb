require 'active_record'

class Job < ActiveRecord::Base
  has_many :skills
  belongs_to :user
  has_many :job_posts
  has_many :users, through: :job_posts


  def delete
    self.destroy
    # delete the job record from db
  end

  def self.job_list
    all
    # retrieve all job records from db
  end

  def add_to_list
    save
    # save the job record to db
  end

  def self.retrieve_list
    all
    # retrieve all job records from db
  end
end
