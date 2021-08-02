# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.
#create a function word_sort 
#takes in parameters array, and a string used to sort
#iterate through the list 
#comparing each array value to the letter associated in the function call
#only return those words which CONTAIN the letter passed in.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
def word_sort (array,letter)
    array.each do |value|
        if value.include? letter
            puts value
        end
    end
end
puts "Sort for letter T:" 
word_sort(beverages_array,letter_t)
puts
puts "Sort for letter O:" 
word_sort(beverages_array,letter_o)
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
# create a function deleter 
#pass in a single parameter string
#use delete method to remove the vowels
def deleter (string)
    puts string.delete "aeiou"
end

deleter(album1)
deleter(album2)
deleter(album3)
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
#create a class called bike with a constant of 2 wheels and a model that can take in different names and finally, speed an object that goes up or down when the method speed up is called
#and slows when brake is called. 


#*****NOTE**** i was curious if theres any way to store the value aking to set state, all the documentation i can find only states that it can only be done when using rails and not just ruby. 
class Bike 
    attr_accessor :speed
    def initialize(model)      
        @wheels = 2
        @speed = 0
        @model = model
    end
    def get_info 
        "The #{@model} has #{@wheels} wheels and is going #{@speed} Mph"
    end
    def speed_up 
        @speed = @speed + 2
    end
    def brake
        if speed == 0
            p "you engage your breaks, but your already stopped"
        else
            @speed = speed - 1
        end
    end
end 
my_bike = Bike.new("trek")
# p my_bike.get_info
 my_bike.speed_up
 my_bike.speed_up
 my_bike.speed_up
 my_bike.speed_up
 my_bike.brake
 my_bike.brake
 my_bike.brake
p my_bike.get_info
# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
