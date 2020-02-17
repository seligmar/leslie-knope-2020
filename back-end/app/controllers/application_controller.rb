class ApplicationController < ActionController::API

  def secret 
    ""
  end 

  def token 
    request.headers["Authorization"]
  end 

  def issue_token(data)
    JWT.encode(data, secret)
  end 

  def decode_token
    JWT.decode(token, secret)
  end 

end
