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
    new_event = Event.new(title: params[:title], street_address: params[:street_address_1], 
    city: params[:city], state: params[:state], zip: params[:zip], 
    datetime: params[:datetime], lat: params[:lat], lng: params[:lng])
    if new_event.save
      render json: { title: new_event.title,  
      datetime: new_event.datetime, city: new_event.city, street_address: new_event.street_address, 
      state: new_event.state, zip: new_event.zip, lat: new_event.lat, lng: new_event.lng
    }, status: :create 
    else 
      render json: { error: new_event.errors.full_messages }, status: :unprocessable_entity
    end 
  end 

  private 

   def event_params 
     params.require(:event).permit(:title, :datetime, 
      :street_address_1, :city, :state, :zip, 
      lat, :lng)
   end 

end
