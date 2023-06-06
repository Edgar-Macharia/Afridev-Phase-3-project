class UsersController < ApplicationController

    get "/users" do
       users = User.all
       users.to_json()
    end

    post "/users/adduser" do
        username=params[:username]
        email=params[:email]
        country=params[:country]
        password=params[:password]

        # user = User.create(username: username, email: email, country: country, password: password)
        # if user
        #     message = {:success=> "User created successfully"}
        #     message.to_json
        # else
        #     message = {:error=> "User already exists"}
        #     message.to_json
        # end

        if(username.present? &&  email.present? && country.present? && password.present?)
               
            check_username = User.exists?(username: username)#true / false
            check_email = User.exists?(email: email)#true / false
 
            if check_username==true
                 status 406
                 message = {:error=> "Username exists in our database"}
                 message.to_json
            
            elsif check_email
                 status 406
                 message = {:error=> "Email exists in our database"}
                 message.to_json
            else
                     user = User.create(username: username, email: email, country: country, password: password)
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

    #current user
    get "/current_user" do
        user = User.find_by(id: session[:user_id])
        
        if user
           {:user => user}.to_json
        else
             message = {:error=> "Not logged in"}
             message.to_json
        end
       
     end

end