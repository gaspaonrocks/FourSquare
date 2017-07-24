'use strict';

angular.module('FourSquare')
  .component('search', {
    templateUrl: '/client/js/components/search/search.html',
    controller: function ($log, FourSquare) {

      this.$onInit = () => {
        $log.log('search component loaded');
      }

      this.explore = () => {
        if (navigator.geolocation) {

          navigator.geolocation.getCurrentPosition((position) => {
            FourSquare.search(position)
              .then((results) => {
                this.results = results;
                $log.log(this.results);
              })
              .catch((err) => {});
          }, (err) => {
            $log.warn(`${err} happened`);
          });

        } else {

          alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
        }
      }
    }
  })