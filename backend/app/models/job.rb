require 'active_record'

class Job < ActiveRecord::Base
  has_many :skills
  belongs_to :user
  has_many :job_posts
  has_many :users, through: :job_posts


  def delete
    self.destroy
    # Code to delete the job record from the database
  end

  def self.job_list
    all
    # Code to retrieve all job records from the database
  end

  def add_to_list
    save
    # Code to save the job record to the database
  end

  def self.retrieve_list
    all
    # Code to retrieve all job records from the database
  end
end
