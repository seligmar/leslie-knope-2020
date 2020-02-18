class EventsController < ApplicationController

  def index
    events = []
    Event.all.map do |event|
      eachEvent = {
      id: event.id, 
      day_time: event.datetime, 
      street_address: event.street_address,
      city: event.city,
      state: event.state,
      zip: event.zip,
      title: event.title,
      lng: event.lng,
      lat: event.lat}
      events << eachEvent
    end 
    # upcoming = events.select do |event| 
    #   event[:year] > Date.today.year ||  
    #   (event[:month] >= Date.today.month && 
    #   event[:day] >= Date.today.day) 

    render json: events 
  end 

  def create 
  end 

end
