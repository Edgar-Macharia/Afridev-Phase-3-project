class ApplicationController < Sinatra::Base

  set :default_content_type, 'application/json'
  set :session => true

  use Rack::Session::Cookie,
    key: 'myapp_session',
    expire_after: 3600, # 1 hour in seconds
    secret: 'myapp_secret_key'


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
