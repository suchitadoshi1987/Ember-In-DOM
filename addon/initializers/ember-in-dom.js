export function initialize(/* container, application */) {
	// application.inject('route', 'foo', 'service:foo');
}

import Ember from 'ember';

Ember.Component.reopen({
	inDOM: function () {
		return (this._state || this.state) === 'inDOM';
	}
});

Ember.View.reopen({
	inDOM: function () {
		return (this._state || this.state) === 'inDOM';
	}
});

export default {
	name: 'ember-in-dom',
	initialize: initialize
};
