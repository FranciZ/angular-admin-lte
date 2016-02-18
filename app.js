angular.module('myApp', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('myApp').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'partial/login/login.html'
    });
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html'
    });
    $stateProvider.state('articles', {
        url: '/articles',
        templateUrl: 'partial/articles/articles.html'
    });
    $stateProvider.state('article', {
        url: '/article/:id',
        templateUrl: 'partial/article/article.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/login');

});

angular.module('myApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
    
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){ 
    
        if(toState.name === 'login'){
            $rootScope.isViewLogin = true;
        }else{
            $rootScope.isViewLogin = false;
        }
        
    });

});






