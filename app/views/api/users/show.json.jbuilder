json.extract! @user, :id, :email, :username, :created_at

json.cupping_sessions do
  json.array! @user.cupping_sessions
end
