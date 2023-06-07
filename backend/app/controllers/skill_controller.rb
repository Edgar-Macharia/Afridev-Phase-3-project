class SkillController < ApplicationController
  get "/skills" do
    skills = Skill.all
    skills.to_json
  end

  post "/skills/addskill" do
    authorize

    name = params[:name]
    description = params[:description]

    if name.present? && description.present?
      user = current_user 
      if user
        skill = Skill.create(
          name: name,
          description: description,
          user: user 
        )

        if skill
          message = { success: "Skill added successfully" }
          message.to_json
        else
          status 406
          message = { error: "Error adding skill" }
          message.to_json
        end
      else
        status 406
        message = { error: "User trying to add skills does not exist" }
        message.to_json
      end
    else
      status 406
      message = { error: "All fields are required" }
      message.to_json
    end
  end
end
