class ChangeAcidityFormatInSamples < ActiveRecord::Migration[5.0]
  def up
    change_column :samples, :acidity, :float
  end

  def down
    change_column :samples, :acidity, :integer
  end
end
