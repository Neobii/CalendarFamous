Router.configure({
  layoutTemplate: 'defaultLayout'
});

Router.route("/", {
	name: "home"
});

Router.route("/calendar", {
	name: "calendar"
});