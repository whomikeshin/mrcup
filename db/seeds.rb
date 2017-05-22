User.destroy_all

mike = User.create!(
  email: "mike@email.com",
  username: "mike",
  password: "password",
)

CuppingSession.destroy_all

session_1 = CuppingSession.create!(
  user: mike,
  name: "first session",
  cups: 5
)

Sample.destroy_all

sample_1 = Sample.create!(
  cupping_session: session_1,
  name: "sumatra raja",
  roast_level: 6.5,
  fragrance: 7.0,
  dry: 1,
  break: 0,
  flavor: 9.0,
  aftertaste: 6.0,
  acidity: 8.25,
  intensity: 5,
  body: 7.0,
  level: 0,
  balance: 8.0,
  uniformity: 10,
  clean_cup: 10,
  sweetness: 10,
  overall: 8.0,
  final_score: 8.0,
  defects: 0,
  defect_intensity: 2
)
