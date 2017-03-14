class CreateCuppingSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :cupping_sessions do |t|
      t.text :name
      t.integer :cups, default: 1
      t.boolean :blind, default: false

      t.timestamps null: false
    end

    add_index :cupping_sessions, :name
  end
end
