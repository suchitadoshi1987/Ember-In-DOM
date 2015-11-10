import Ember from 'ember';
import layout from '../templates/components/my-thing';

export default Ember.Component.extend({
  layout: layout,

  init() {
    this._super(...arguments);
    this.isInDom = false;
  },

  didInsertElement() {
    this._super(...arguments);
    this.set('isInDom', this.inDOM());
  }
});
