var DI = [
    'ngRoute',
    'ui.bootstrap',
    'jcs-autoValidate',
    'ngMessages',
    'ngFileUpload'
];

var win = new winDevice("myApp", DI); //Bootstrap Cordova Or Browser Based App .no ng-app Required
var app = win.device(); // init App
win.enable(true);
win.info();


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider

        .when("/landing", {
            templateUrl: 'components/landing/landing.html',
            controller: 'landingCtrl',
            config: {
                showNavbar: true,
                hideElementsOnLogin: false
            }
        })
        .when("/login", {
            templateUrl: 'components/login/login.html',
            controller: 'loginCtrl',
            config: {
                showNavbar: true,
                hideElementsOnLogin: false

            }
        })
        .when("/not-found", {
            templateUrl: 'components/not-found/not-found.html',
            controller: 'notFoundCtrl',
            config: {
                showNavbar: true,
                hideElementsOnLogin: false
            }
        })
        .otherwise({ redirectTo: '/login' });

}]);


// Run once Change in Route Happens
app.run(['$rootScope', 'bootstrap3ElementModifier', 'validator', function($rootScope, bootstrap3ElementModifier, validator) {

    bootstrap3ElementModifier.enableValidationStateIcons(true);



    $rootScope.$on('$routeChangeStart', function(event, current, next) {
        warn("Current Route Params");
        log(current);
        log(current.config);
        $rootScope.showNavbar = current.config.showNavbar;
        $rootScope.hideElementsOnLogin = current.config.hideElementsOnLogin;

    });

    $rootScope.$on('$routeChangeSuccess', function() {

    });


}]);