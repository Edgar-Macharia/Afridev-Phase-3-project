class ListController < ApplicationController

  get "/lists/:list_id" do
    authorize

    list = List.find(params[:list_id])
    if list
      list.to_json(include: :jobs)
    else
      status 404
      message = { error: "List not found" }
      message.to_json
    end
  end

  post "/lists/addlist/:job_id" do
    authorize
    
    list = List.find(params[:list_id])
    job = Job.find(params[:job_id])
    
    if list && job
      list.jobs << job
      message = { success: "Job added to list successfully" }
      status 200
      message.to_json
    else
      status 406
      message = { error: "Error adding job to list" }
      message.to_json
    end
  end

  # =============UPDATE Archive LIST
patch "/list/archive/:id" do
  authorize

  archive=params[:archive]

 
  if(archive.present? )
      list_find = List.find_by(id: params[:id])
      list = List.find.update(archive: archive)
      if list
          message = {:success=> "list archived"}
          message.to_json
      else
          status 406
          message = {:error=> "Error archiving the list"}
          message.to_json
      end

  else
      status 406
      message = {:error=> "All field are required"}
      message.to_json
  end
end

      
    
end