class JobsController < ApplicationController

    get "/jobs" do
       jobs = Job.where(archive: false)
       jobs.to_json(include: :user)
    end
end