Template.calendarTemp.helpers({
    famEvents: function () {
    	var ti = Template.instance();
      //  var fc = this.$('#allEventsCalendar');
        return function (start, end, tz, callback) {
        	var fc = ti.$('#myCalendar');
            //subscribe only to specified date range
            Meteor.subscribe('calendar', start, end, function () {
                fc.fullCalendar('refetchEvents');
            });

            var events = TestEvents.find().map(function (show) {
                show.title = show.name;
                show.url = "/show/" + show._id;
                switch(show.allowedAges) {
                  case "all-ages":
                    show.color = '#147a91';
                    break;
                  case "18andUp":
                    show.color = '#efa44b';
                    break;
                  case "21andUp":
                    show.color = '#38d6a5';
                    break;
                }
                return show;
            });
            callback(events);
        };
    }
});

Template.calendarTemp.onRendered(function() {
    var ti = Template.instance();
    var div = ti.$(ti.firstNode);
    famous.core.Engine.nextTick(function() {
        famous.core.Engine.nextTick(function() {
            div.fullCalendar('render');
        });
    });
});