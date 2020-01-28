app.factory('myCustomErrorMessageResolver', [
    '$q',
    function($q) {
        /**
         * @ngdoc function
         * @name defaultErrorMessageResolver#resolve
         * @methodOf defaultErrorMessageResolver
         *
         * @description
         * Resolves a validate error type into a user validation error message
         *
         * @param {String} errorType - The type of validation error that has occurred.
         * @param {Element} el - The input element that is the source of the validation error.
         * @returns {Promise} A promise that is resolved when the validation message has been produced.
         */
        var resolve = function(errorType, el) {
            var defer = $q.defer();
            // do something to get the error message
            // then resolve the promise defer.resolve('some error message');
            return defer.promise;
        };

        return {
            resolve: resolve
        };
    }
]);


app.factory('myCustomElementModifier', [
    function() {
        var
            /**
             * @ngdoc function
             * @name myCustomElementModifier#makeValid
             * @methodOf myCustomElementModifier
             *
             * @description
             * Makes an element appear valid by apply custom styles and child elements.
             *
             * @param {Element} el - The input control element that is the target of the validation.
             */
            makeValid = function(el) {
                // do some code here...
            },

            /**
             * @ngdoc function
             * @name myCustomElementModifier#makeInvalid
             * @methodOf myCustomElementModifier
             *
             * @description
             * Makes an element appear invalid by apply custom styles and child elements.
             *
             * @param {Element} el - The input control element that is the target of the validation.
             * @param {String} errorMsg - The validation error message to display to the user.
             */
            makeInvalid = function(el, errorMsg) {
                // do some code here...
            },


            /**
             * @ngdoc function
             * @name myCustomElementModifier#makeDefault
             * @methodOf myCustomElementModifier
             *
             * @description
             * Makes an element appear in its default visual state.
             *
             * @param {Element} el - The input control element that is the target of the validation.
             */
            makeDefault = function(el) {
                // return the element to a default visual state i.e. before any form of validation was applied
            };

        return {
            makeValid: makeValid,
            makeInvalid: makeInvalid,
            makeDefault: makeDefault,
            key: 'myCustomModifierKey'
        };
    }
]);

app.directive('validateFile', function () {
    return {
      restrict: "A",
      require: '^form',

      link: function (scope,elem,attrs, ctrl) {

        elem.bind("change", function(e) {
          console.log("change");
          scope.$apply(function(){
              ctrl.$valid=true;
              ctrl.$invalid=false;
          });
        });

      }
    };
  });