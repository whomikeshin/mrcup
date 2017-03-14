class AddForeignKeysToTables < ActiveRecord::Migration[5.0]
  def change
    add_column :cupping_sessions, :user_id, :integer
    add_column :samples, :cupping_session_id, :integer
  end
end
