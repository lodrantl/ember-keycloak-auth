/**
 *
 */
import Ember from 'ember';
import KeycloakAuthenticatedRouteMixin from 'ember-keycloak-auth/mixins/keycloak-authenticated-route';

export default Ember.Route.extend(KeycloakAuthenticatedRouteMixin, {

  model: function (params) {

    console.log(`Protected route ${Object.keys(params)}`);
  }

});
