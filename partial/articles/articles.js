angular.module('myApp').controller('ArticlesCtrl',function($scope, articleService){

    $scope.articles = articleService.model.list;
    
    $scope.togglePublish = function(){
      
        
        
    };
    
    $scope.deleteArticle = function(id){
        
        articleService.deleteArticle(id);
        
    };
    
});