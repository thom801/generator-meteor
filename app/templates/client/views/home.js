Template.home.helpers({
  welcome: function() {
    return 'Welcome to Meteor Generated by Yeoman!';
  }
});

Template.home.events({
  'click .clicky': function(event, template) {
    template.find('.clicky').innerHTML='Clicked.';
  }
})