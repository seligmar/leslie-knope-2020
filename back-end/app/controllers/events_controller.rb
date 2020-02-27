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

  def new 
    new_event = Event.new(title: params[:title], street_address: params[:street_address_1]
    )
  end 

  private 

   def event_params 
     params.require(:event).permit(:title, :start_time, 
      :street_address_1, :city, :state, :zip, 
      :datetime, lat, :lng)
   end 

end
