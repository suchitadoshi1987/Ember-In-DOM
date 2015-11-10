import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-thing', 'Integration | Component | my thing', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });]

  this.render(hbs`{{my-thing}}`);

  // Template block usage:
  this.render(hbs`
    {{#my-thing}}
      template block text
    {{/my-thing}}
  `);

  assert.equal(this.$('#is-in-dom').text().trim(), 'true');
});
