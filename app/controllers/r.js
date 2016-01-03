import Ember from 'ember';

export default Ember.Controller.extend({
  pictures: Ember.computed('model.data.children.[]', function() {
    let imgurOnly = this.get('model').data.children.filterBy('data.domain', 'i.imgur.com');
    imgurOnly.forEach((pic) => {
      if (pic.data.thumbnail === 'nsfw') {
        pic.set('data.thumbnail', 'https://farm3.staticflickr.com/2571/3810679130_fbb7494d7b_t.jpg');
      }
    });

    return imgurOnly;
  })
});
