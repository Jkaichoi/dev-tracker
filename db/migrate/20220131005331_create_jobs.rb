class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :title
      t.string :status
      t.text :description
      t.float :salary
      t.string :location
      t.date :startApply
      t.date :endApply
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
