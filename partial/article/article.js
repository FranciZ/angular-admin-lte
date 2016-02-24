angular.module('myApp').controller('ArticleCtrl',function($scope, articleService){

    $scope.article = {
        title:'Default title',
        body:'Default body'
    };
    
    $scope.onSaveClick = function(){
        
        articleService.saveArticle($scope.article);
        
    };

});