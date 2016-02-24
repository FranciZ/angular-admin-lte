angular.module('myApp').factory('articleService',function($http) {

	var article = {
        model:{
            list:[],
            item:null
        },
        getArticles:function(){
            
            $http.get('http://localhost:3000/articles')
                .then(function(res){
                
                console.log(res);
                
            });
            
        },
        saveArticle:function(articleData){
            
            $http.post('http://localhost:3000/article', articleData)
                .then(function(res){
               
                console.log(res);
                
            });
            
        },
        deleteArticle:function(){
            
            
            
        }
    };

	return article;
});