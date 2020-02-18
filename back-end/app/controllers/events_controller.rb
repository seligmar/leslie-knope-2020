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
  end 

end
