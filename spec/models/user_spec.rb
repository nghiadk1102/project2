require "rails_helper"

RSpec.describe User, type: :model do
  context "association" do
    it {expect have_many :posts}
    it {expect have_many :comments}
    it {expect have_many :followers}
    it {expect have_many :following}
    it {expect have_many :active_relationships}
    it {expect have_many :passive_relationships}
  end

  context "validates" do
    it {expect :name}
    it {expect :email}
    it {expect :password}
    it {expect :phone}
  end

end