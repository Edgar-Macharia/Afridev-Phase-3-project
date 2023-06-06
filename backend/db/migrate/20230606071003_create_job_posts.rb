class CreateJobPosts < ActiveRecord::Migration[6.1]
  def change
      create_table :job_posts do |t|
        t.string :title
        t.string :company_name
        t.text :description
        t.string :location
  
        t.timestamps
      end
  end
end
