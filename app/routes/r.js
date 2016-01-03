import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.$.getJSON(`https://www.reddit.com/r/${params.subreddit}.json`);
  },

  afterModel(r) {
    r.subreddit = r.data.children[0].data.subreddit || '';
  }
});
