class RoadTripSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure, :destination, :pit_stops, :trip_distance
  belongs_to :user
  has_one :departure, serializer: RoadTripDepartureSerializer
  has_many :pit_stops, serializer: RoadTripPitStopSerializer
  has_one :destination, serializer: RoadTripDestinationSerializer

  def trip_distance

    # https://en.wikipedia.org/wiki/Haversine_formula#:~:text=The%20haversine%20formula%20determines%20the,and%20angles%20of%20spherical%20triangles.

    # Central angle (0) between any two points on a sphere be:
      # 0 = d/r
        # d = distance between two points
        # r = radius of the sphere

    # haversine formula (calculates haversine from lat and lng of two points)
      # hav(z) = hav(lat2 - lat1) + (1 - hav(lat1 - lat2) - hav(lat1 + lat2)) * hav(lng2 - lng1)
      # x1 = lat of point 1
      x_one = (self.road_trip.departure.lat)
      # x2 = lat of point 2
      x_two = (self.road_trip.destination.lat)
      # y1 = lng of point 1
      y_one = (self.road_trip.departure.lng)
      # y2 = lng of point 2
      y_two = (self.road_trip.destination.lng)

    #  to calculate distance use archaversine
      # d = 2r arcsin(squareRoot(hav(lat2 - lat1) + (1 - hav(lat1 - lat2) - hav(lat1 + lat2)) * hav(lng2 - lng1)))
      #   = 2r arcsin(squareRoot(sin^2((x2 - x1)/2) + (1 - sin^2((x2 - x1)/2) - sin^2((x2 + x1)/2)) * sin^2(y2 -y1)/2))
      #   = 2r arcsin(squareRoot(sin^2((x2 - x1)/2) + cos(x1) * cos(x2) * sin^2((y2 - y1)/2)))

    earth_radius = 3958.8 #miles

    # radians = coordinate * pi/180
    def degrees_to_radians(coordinate)
      (coordinate) * (Math::PI)
    end

    # convert coordinates to radians from degrees
    x_one_radian = degrees_to_radians(x_one) 
    x_two_radian = degrees_to_radians(x_two)
    y_one_radian = degrees_to_radians(y_one)  
    y_two_radian = degrees_to_radians(y_two)  


    # find difference of lat and lng with Radians
    lat_difference_div_two = (x_two_radian - x_one_radian)/2
    lng_difference_div_two = (y_two_radian - y_one_radian)/2
    # add difference of distance to formula = 2r arcsin(squareRoot(sin^2((x2 - x1)/2) + cos(x1) * cos(x2) * sin^2((y2 - y1)/2)))
    # lat_sin = Math::sin**2 * (lat_difference_div_two)
    # lng_sin = Math::sin**2 * (lng_difference_div_two)
    # x_one_cosine = Math:
    
    distance = earth_radius * Math::asin( Math::sqrt(((Math::sin(lat_difference_div_two))**2) + Math::cos(x_one) + Math::cos(x_two) * ((Math::sin(lng_difference_div_two))**2)) )
  
    return distance

  end

end
