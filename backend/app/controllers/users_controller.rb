class UsersController < ApplicationController

    get "/users" do
      users = User.all
      users.to_json()
    end
  
    post "/users/adduser" do
      username = params[:username]
      email = params[:email]
      country = params[:country]
      password = params[:password]
  
      if username.present? && email.present? && country.present? && password.present?
        check_username = User.exists?(username: username)
        check_email = User.exists?(email: email)
  
        if check_username
          status 406
          message = { error: "Username exists in our database" }
          message.to_json
        elsif check_email
          status 406
          message = { error: "Email exists in our database" }
          message.to_json
        else
          user = User.create(username: username, email: email, country: country, password: password)
          if user
            message = { success: "User has been created successfully" }
            message.to_json
          else
            status 406
            message = { error: "Error saving the user" }
            message.to_json
          end
        end
      else
        status 406
        message = { error: "All values are required" }
        message.to_json
      end
    end
    
  
    # UPDATE USER
    patch "/users/edituser/:id" do
      authorize
  
      username = params[:username]
      email = params[:email]
      country = params[:country]
      password = params[:password]
      user_id = params[:user_id]
  
      if username.present? && user_id.present?
        user = User.find_by(id: params[:id])
        if user
          user.update(username: username, email: email, country: country)
          message = { success: "User updated successfully" }
          message.to_json
        else
          status 406
          message = { error: "Error updating the user" }
          message.to_json
        end
      else
        status 406
        message = { error: "All fields are required" }
        message.to_json
      end
    end
  
    # DELETE USER
    delete "/users/delete/:id" do
      authorize
  
      if User.exists?(id: params[:id])
        user = User.find(params[:id])
        user.destroy
        message = { success: "User deleted successfully" }
        message.to_json
      else
        status 406
        message = { error: "The user does not exist" }
        message.to_json
      end
    end
  end  