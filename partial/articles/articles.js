angular.module('myApp').controller('ArticlesCtrl',function($scope, articleService){

    articleService.getArticles();

    
});