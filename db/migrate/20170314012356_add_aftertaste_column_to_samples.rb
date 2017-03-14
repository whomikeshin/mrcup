class AddAftertasteColumnToSamples < ActiveRecord::Migration[5.0]
  def change
    add_column :samples, :aftertaste, :float
  end
end
