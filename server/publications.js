Meteor.publish("calendar", function(month, year){//need to pass in month?
  return TestEvents.find({});
});