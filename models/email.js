EmailServer.Email = DS.Model.extend({
  to: DS.attr(),
  copy: DS.attr(),
  subject: DS.attr(),
  body: DS.attr(),
});
