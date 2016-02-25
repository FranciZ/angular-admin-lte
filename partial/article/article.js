angular.module('myApp').controller('ArticleCtrl',function($scope, articleService, $state){

    $scope.article = {
        title : 'Default title 2',
        body  : 'Default body'
    };
    
    $scope.onSaveClick = function(){
        
        articleService.saveArticle($scope.article, function(){
            
            $state.go('articles');
            
        });
        
    };

});