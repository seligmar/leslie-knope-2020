class EventsController < ApplicationController

  def index
    events = []
    Event.all.map do |event|
      eachEvent = {
      id: event.id, 
      datetime: event.datetime, 
      street_address: event.street_address,
      city: event.city,
      state: event.state,
      zip: event.zip,
      title: event.title,
      lng: event.lng,
      lat: event.lat}
      events << eachEvent
    end 
    newlist = events.sort_by {|obj| obj[:datetime] } 
    render json: newlist 
end

  def create 
    # if (start[0] === '1' || start[0] === '2') {
    #   let newNum = Number(start[0] + start[1]) - 12
    #   start = '0' + newNum + ':' + start[3] + start[4]
    # }
  end 

end
