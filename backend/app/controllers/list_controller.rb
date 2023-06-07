class ListController < ApplicationController

    

    def add_job_to_list
        job_id = params[:job_id]
        list_id = params[:list_id]
      
        job = Job.find(job_id)
        list = List.find(list_id)
      
        list.jobs << job
      
        redirect_to lists_path # Redirect the user to the lists page or any other desired location
      end
      
    
end