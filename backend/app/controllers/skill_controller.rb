class SkillController < ApplicationController

    get "/skills" do
      name = params[:name]
  
      skill = Skill.find_by(name: name)
  
      if skill
        @jobs = skill.jobs
        @users = skill.users
      else
        @jobs = []
        @users = []
      end
  
      if @jobs.empty? && @users.empty?
        'No match'
      else
        erb :search_results
      end
    end

    post "/skills/addskill" do
        name=params[:name]
        description=params[:description]

        if(name.present? &&  description.present?)
               
            check_name = User.exists?(name: name)#true / false
            check_description = User.exists?(description: description)#true / false
 
            if check_name==true
                 status 406
                 message = {:error=> "name exists in our database"}
                 message.to_json
            
            elsif check_description
                 status 406
                 message = {:error=> "description exists in our database"}
                 message.to_json
            else
                     user = User.create(name: name, description: description, country: country, password: password)
                     if user
                         message = {:success=> "User has been created successfully"}
                         message.to_json
                     else
                         message = {:error=> "Error saving the user"}
                         message.to_json
                     end
             end
         
         else
             status 406
             message = {:error=> "All values are required"}
             message.to_json
         end
    end

  end
  