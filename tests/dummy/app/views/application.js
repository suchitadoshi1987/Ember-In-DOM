import Ember from 'ember';

export default Ember.View.extend({
	init() {
		this._super(...arguments);
		this.set('isViewInDom', false);
	},
	didInsertElement() {
		this._super(...arguments);
		this.set('isViewInDom', this.inDOM());
	}
});
