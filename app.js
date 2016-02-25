angular.module('myApp', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('myApp').config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);
    
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'partial/login/login.html',
        controller:'LoginCtrl'
    });
    
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html',
        controller:'ProjectsCtrl'
    });
    
    $stateProvider.state('articles', {
        url: '/articles',
        templateUrl: 'partial/articles/articles.html',
        controller:'ArticlesCtrl',
        resolve:{
            articles: function(articleService, $timeout){
                
                return articleService.getArticles();
                
            }
        }
    });
    
    $stateProvider.state('article', {
        url: '/article',
        templateUrl: 'partial/article/article.html'
    });
    $stateProvider.state('project', {
        url: '/project',
        templateUrl: 'partial/project/project.html',
        controller:'ProjectCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/projects');

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






