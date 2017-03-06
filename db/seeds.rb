User.destroy_all

mike = User.create!(
  email: "mike@email.com",
  username: "mike",
  password: "password",
)
