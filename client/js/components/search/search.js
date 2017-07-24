'use strict';

angular.module('FourSquare')
  .component('search', {
    templateUrl: '/client/js/components/search/search.html',
    controller: function ($log, FourSquare) {

      this.$onInit = () => {
        $log.log('search component loaded');
      }

      this.search = (query) => {
        $log.info('controller', query);
        FourSquare.search(query).then().catch();
      }
    }
  })