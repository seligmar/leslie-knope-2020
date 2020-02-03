class UsersController < ApplicationController

  def signin
    user1 = params[:username]
    user = User.find_by(username: user1)
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
