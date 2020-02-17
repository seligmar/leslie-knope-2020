class ApplicationController < ActionController::API

  def secret 
    "Its a SECRET"
  end 

  def get_current_user
    id = decode_token
    User.find_by(id: id)
  end 

  def token
    request.headers["Authorization"]
  end 

  def issue_token(data)
    JWT.encode(data, secret)
  end 

  def decode_token
    begin
      # this signals to Ruby that there may be errors 
    JWT.decode(token, secret)[0]["id"]
    rescue 
      # this is what to do if those errors occur 
      {}
  end 
end 

end
