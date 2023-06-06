class JobController < ApplicationController

    get "/myjobs" do
        jobs = Job.all
        jobs.to_json(include: :job)
    end

    # job "/jobjob" do
    # username=params[:username]
    # email=params[:email]
    # country=params[:country]
    # password=params[:password]
    # end
 
 # =============ADD JOB
     post "/jobs/addjob" do
         authorize
 
         title=params[:title]
         company_name=params[:company_name]
         user_id=params[:user_id]
         location=params[:location]
         description=param[:description]
        
         if(title.present? &&  company_name.present? && user_id.present?)
 
             check_user = User.exists?(id: user_id)
             if check_user===false
                 status 406
                 puts "USER NOT EXIST"
                 message = {:error=> "User trying to add job does not exist!"}
                 message.to_json
             
             else
                 job = job.create(title: title, company_name: company_name, user_id: user_id)
                 if job
                     message = {:success=> "job created successfully"}
                     message.to_json
                 else
                     status 406
                     message = {:error=> "Error saving the job"}
                     message.to_json
                 end
 
             end
         else
             status 406
             message = {:error=> "All field are required"}
             message.to_json
         end
     end
 
 # =============UPDATE job
 patch "/jobs/editjob/:id" do
 
     authorize
 
 
     title=params[:title]
     company_name=params[:company_name]
    
    
     if(title.present? &&  company_name.present? )
         job_find = job.find_by(id: params[:id])
         job = job_find.update(title: title, company_name: company_name)
         if job
             message = {:success=> "job updated successfully"}
             message.to_json
         else
             status 406
             message = {:error=> "Error updating the job"}
             message.to_json
         end
 
     else
         status 406
         message = {:error=> "All field are required"}
         message.to_json
     end
 end
 
 
 
 # =============UPDATE Archive job
 patch "/jobs/archive/:id" do
     authorize
 
     archive=params[:archive]
   
    
     if(archive.present? )
         job_find = job.find_by(id: params[:id])
         job = job_find.update(archive: archive)
         if job
             message = {:success=> "job archived"}
             message.to_json
         else
             status 406
             message = {:error=> "Error archiving the job"}
             message.to_json
         end
 
     else
         status 406
         message = {:error=> "All field are required"}
         message.to_json
     end
 end
 
 # =============DELETE job
 delete "/jobs/delete/:id" do
     authorize 
     
     check_job = job.exists?(id: params[:id] ) 
     if check_job
         job = job.find(params[:id])
         job.destroy
         message = {:success=> "job deleted successfully"}
         message.to_json
     else
         status 406
         message = {:error=> "The job does not exist"}
         message.to_json
     end
    end
 
 
end