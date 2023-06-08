class SessionController < ApplicationController

    post "/auth/login" do
        username=params[:username]
        password=params[:password]
    
       
        if(username.present? &&  password.present? )
            user = User.find_by(username: username)

            if (user && user.authenticate(password))
                session[:user_id] = user.id

                message = {:success=> "Login success"}
                message.to_json

            else
                status 401
                message = {:error=> "Wrong username or password"}
                message.to_json
            end
          
        
        else
            status 406
            message = {:error=> "All fields are required"}
            message.to_json()
        end
    end


    # Logout
    post "/auth/logout" do
       session.delete :user_id
       message = {:success=> "Logout success"}
       message.to_json()
    end 

    # CURRENT USER
    get "/current_user" do

       puts "logged in"
       puts user_id = session[:user_id]
      
        if user_id
          # Fetch the user from the database using the user_id
          user = User.find_by(id: user_id)
      
          if user
            { currentUser: user }.to_json
          else
            { error: "User not found" }.to_json
          end
        else
          { error: "Not logged in" }.to_json
        end
    end
end