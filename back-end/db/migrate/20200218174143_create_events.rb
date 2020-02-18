class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title 
      t.datetime :datetime 
      t.string :street_address 
      t.string :city 
      t.string :state 
      t.string :zip 
      t.float :lat 
      t.float :lng 

      t.timestamps
    end
  end
end
