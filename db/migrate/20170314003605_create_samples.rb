class CreateSamples < ActiveRecord::Migration[5.0]
  def change
    create_table :samples do |t|
      t.string  :name
      t.float   :roast_level
      t.float   :fragrance
      t.integer :dry
      t.integer :break
      t.float   :flavor
      t.integer :acidity
      t.integer :intensity
      t.float   :body
      t.integer :level
      t.float   :balance
      t.integer :uniformity
      t.integer :clean_cup
      t.integer :sweetness
      t.float   :overall
      t.float   :final_score
      t.text    :notes

      t.timestamps
    end
  end
end
