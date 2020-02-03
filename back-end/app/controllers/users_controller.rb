class UsersController < ApplicationController

  def signin
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password]) 
      # || user = get_current_user 
      render json: { username: user.username }
      # , token: issue_token({id: user.id})
    # }  
    else 
      render json: {error: 'username and password combination invalid'}, status: 401
    end 
  end 

  def new
  end 

  private 

  def user_params 
    params.require(:user).permit(:username, :password)
  end 

end
