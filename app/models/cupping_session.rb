class CuppingSession < ApplicationRecord
  belongs_to :user
  has_many :samples
end
