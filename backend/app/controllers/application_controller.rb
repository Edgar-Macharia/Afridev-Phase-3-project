class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  set :session =>true

  use Rack::Session::Cookie,
  expire_after: 3600


  # Authorize
  def authorize
    if session[:user_id].blank?
      puts "Authorize called"
      message = {:error=> "Not Authorized"}

      halt 401, message.to_json
    end
  end

  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

end
