'use strict';

angular.module('podcastplanerApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
