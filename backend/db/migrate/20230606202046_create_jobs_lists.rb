class CreateJobsLists < ActiveRecord::Migration[6.1]
  def change
    create_join_table :jobs, :lists do |t|
      
      t.timestamps
    end
    
  end
end
