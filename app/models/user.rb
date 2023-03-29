class User < ApplicationRecord
    has_many :campaigns 
    has_many :pledges 
    has_many :reviews 

    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum: 8}

end
