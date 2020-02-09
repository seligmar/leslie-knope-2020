class UsersController < ApplicationController

  def signin
    user1 = params[:username]
    user = User.find_by(username: user1)
    if user && user.authenticate(params[:password]) 
      # || user = get_current_user 
      render json: { username: user.username, token: issue_token({id: user.id}) }  
    else 
      render json: {error: 'username and password combination invalid'}, status: 401
    end 
  end 

  def new 
    user = User.new(username: params[:username], password: params[:password])
    if user.save
        render json: { username: user.username, token: issue_token({id: user.id})}, status: :create
    else 
      if (user.errors.full_messages[0] === 'Username has already been taken')
        render json: {error: 'username and password combination invalid'}
      else 
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end 
  end 

def validate 
  id = request.headers["Authorization"].to_i
  user = User.find_by(id: id)
    if user 
        render json: {username: user.username, token: issue_token({id: user.id}) }
    else render json: {error: 'Invalid token'}, status: 404
  end 
end 

  private 

  def user_params 
    params.require(:user).permit(:username, :password)
  end 

end
