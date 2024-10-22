class JobController < ApplicationController
  get "/myjobs" do
    jobs = Job.all
    jobs.to_json
  end

  # ADD JOB
  post "/jobs/addjob" do
    authorize

    title = params[:title]
    company_name = params[:company_name]
    user_id = params[:user_id]
    location = params[:location]
    description = params[:description]

    if title.present? && company_name.present? && description.present?
      if User.exists?(id: user_id)
        job = Job.create(
          title: title,
          company_name: company_name,
          location: location,
          description: description,
          user_id: user_id
        )

        if job
          message = { success: "Job created successfully" }
          message.to_json
        else
          status 406
          message = { error: "Error saving the job" }
          message.to_json
        end
      else
        status 406
        message = { error: "User trying to add job does not exist" }
        message.to_json
      end
    else
      status 406
      message = { error: "All fields are required" }
      message.to_json
    end
  end

  # UPDATE JOB
patch "/jobs/editjob/:id" do
  authorize

  title = params[:title]
  company_name = params[:company_name]

  if title.present? && company_name.present?
    job = Job.find_by(id: params[:id])
    if job
      if job.update(title: title, company_name: company_name)
        { success: "Job updated successfully" }.to_json
      else
        status 406
        { error: "Error updating the job" }.to_json
      end
    else
      status 404
      { error: "Job not found" }.to_json
    end
  else
    status 400
    { error: "All fields are required" }.to_json
  end
end

# DELETE JOB
delete "/jobs/delete/:id" do
  authorize

  if Job.exists?(id: params[:id])
    job = Job.find(params[:id])
    job.destroy
    message = { success: "Job deleted successfully" }
    message.to_json
  else
    status 406
    message = { error: "The Job does not exist" }
    message.to_json
  end
end

# Search jobs
get "/jobs/search" do
  searchTerm = params[:term]

  query = "
    SELECT * FROM jobs
    WHERE title LIKE '%#{searchTerm}%'
  "

  matchingJobs = ActiveRecord::Base.connection.execute(query)
  matchingJobs.to_json
end

end
  