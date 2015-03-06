EmailServer.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        to: this.get('to'),
        copy: this.get('copy'),
        subject: this.get('subject'),
        body: this.get('body')
      });

      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
})
