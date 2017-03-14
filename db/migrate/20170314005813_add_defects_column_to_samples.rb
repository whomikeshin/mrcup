class AddDefectsColumnToSamples < ActiveRecord::Migration[5.0]
  def change
    add_column :samples, :defects, :integer
    add_column :samples, :defect_intensity, :integer
  end
end
