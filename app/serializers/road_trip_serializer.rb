class RoadTripSerializer < ActiveModel::Serializer
  attributes :id, :name, :departure, :destination, :pit_stops
  belongs_to :user
  has_one :departure, serializer: RoadTripDepartureSerializer
  has_many :pit_stops, serializer: RoadTripPitStopSerializer
  has_one :destination, serializer: RoadTripDestinationSerializer

  def trip_distance
    # Central angle (0) between any two points on a sphere be:
      # 0 = d/r
        # d = distance between two points
        # r = radius of the sphere

    # haversine formula (calculates haversine from lat and lng of two points)
      # hav(z) = hav(lat2 - lat1) + (1 - hav(lat1 - lat2) - hav(lat1 + lat2)) * hav(lng2 - lng1)
      # x1 = lat of point 1
      # x2 = lat of point 2
      # y1 = lng of point 1
      # y2 = lng of point 2

    #  to calculate distance use archaversine
      # d = 2r arcsin(squareRoot(hav(lat2 - lat1) + (1 - hav(lat1 - lat2) - hav(lat1 + lat2)) * hav(lng2 - lng1)))
      #   = 2r arcsin(squareRoot(sin^2((x2 - x1)/2) + (1 - sin^2((x2 - x1)/2) - sin^2((x2 + x1)/2)) * sin^2(y2 -y1)/2))
      #   = 2r arcsin(squareRoot(sin^2((x2 - x1)/2) + cos(x1) * cos(x2) * sin^2((y2 - y1)/2)))

    earth_radius = 3958.8 #miles

    # radians = coordinate * pi/180

    # convert coordinates to radians from degrees
    # find difference of lat and long with Radians
    # add difference of distance to formula = 2r arcsin(squareRoot(sin^2((x2 - x1)/2) + cos(x1) * cos(x2) * sin^2((y2 - y1)/2)))
  end

end
