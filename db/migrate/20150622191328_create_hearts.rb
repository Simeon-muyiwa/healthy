class CreateHearts < ActiveRecord::Migration
  def change
    create_table :hearts do |t|
      t.string :name
      t.text :body

      t.timestamps null: false
    end
  end
end
