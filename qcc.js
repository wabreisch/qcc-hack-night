if (Meteor.isClient) {
  Template.body.helpers({
    tasks: [
      { text: "Nashville Predators"},
      { text: "Los Angeles Kings"},
      { text: "Philadelphia Flyers"}
    ]
  }); 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
