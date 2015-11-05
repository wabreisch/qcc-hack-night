if (Meteor.isClient) {
  Template.body.helpers({
    teams: [
      { text: "Nashville Predators"},
      { text: "Los Angeles Kings"},
      { text: "New York Mets"},
      { text: "Boston Bruins"},
      { text: "Philadelphia Flyers"}
    ]
  });

  Template.body.events({
    "submit form": function (e) {
      e.preventDefault();
      teamname = $(e.target).find('[id=textinput]').val();
      alert(teamname);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
