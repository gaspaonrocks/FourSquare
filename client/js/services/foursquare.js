'use strict';

angular.module('FourSquare')
  .service('FourSquare', function ($log, $http, $q) {

    this.CONSTANTS = {
      FOURSQUARE_URL: 'https://api.foursquare.com/v2/venues/search',
      CLIENT_ID: 'GHS0YDY5HWKERAZJJRGN01HL5FR5NFV05ZAIWILRLAW4F0T0',
      CLIENT_SECRET: '2GMERZUXAB3GH0TZTV4QGCA3QJQLVHOI3F2Y3Q2CLXWFHALE'
    }

    // &client_id=CLIENT_ID&client_secret=CLIENT_SECRET

    this.search = (str) => {
      $log.log('service', str)
      return $q((resolve, reject) => {
        $log.warn(`${this.CONSTANTS.FOURSQUARE_URL}${str}&client_id=${this.CONSTANTS.CLIENT_ID}&client_secret=${this.CONSTANTS.CLIENT_SECRET}`)
        $http.get(`${this.CONSTANTS.FOURSQUARE_URL}${str}&client_id=${this.CONSTANTS.CLIENT_ID}&client_secret=${this.CONSTANTS.CLIENT_SECRET}`).then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }

  })