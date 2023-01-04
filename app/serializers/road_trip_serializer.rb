class RoadTripSerializer < ActiveModel::Serializer
  attributes :id, :trip_name, :road_trip_distance_miles, :user_likes
  belongs_to :user
  has_one :departure, serializer: RoadTripDepartureSerializer
  has_many :pit_stops
  has_one :destination

  # def trip_distance_miles
  #   # https://gist.github.com/timols/5268103
  #   # haversine distance formula

  #   def radian_conversion(coordinate)
  #     coordinate * ((Math::PI)/180)
  #   end

  #   departure_lat = self.object.departure.lat.to_f
  #   departure_lng = self.object.departure.lng.to_f
    
  #   if self.object.destination
  #     destination_lat = self.object.destination.lat.to_f
  #     destination_lng = self.object.destination.lng.to_f

  #     lat_difference = destination_lat - departure_lat
  #     lng_difference = destination_lng - departure_lng

  #     lat_radial_arc = radian_conversion(destination_lat - departure_lat)
  #     lng_radial_arc = radian_conversion(destination_lng - departure_lng)
      
  #     haversine_function = 
  #       (Math::sin(lat_radial_arc / 2) ** 2) +
  #       Math::cos(radian_conversion(departure_lat)) *
  #       Math::cos(radian_conversion(destination_lat)) *
  #       (Math::sin(lng_radial_arc /2) ** 2)
        
  #     archaversine_method = 
  #       2 * Math::atan2(Math::sqrt(haversine_function), Math::sqrt(1 - haversine_function)) 

  #     earth_radius_miles = 3958.8

  #     feet_in_mile = 5280
      
  #     distance_miles = 
  #       earth_radius_miles * archaversine_method

  #     return distance_miles.round(2)
  #   end

  # end

end
