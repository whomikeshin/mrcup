User.destroy_all

mike = User.create!(
  email: "mike@email.com",
  username: "mike",
  password: "password",
)

jin = User.create!(
  email: "jin@email.com",
  username: "jin",
  password: "password"
)
