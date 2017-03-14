class ChangeTextFormatInCuppingSessions < ActiveRecord::Migration[5.0]
  def up
    change_column :cupping_sessions, :name, :string
  end

  def down
    change_column :cupping_sessions, :name, :text
  end
end
