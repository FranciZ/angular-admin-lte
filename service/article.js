angular.module('myApp').factory('articleService',function($http) {

	var article = {
        model:{
            list:[],
            item:null
        },
        getArticles:function(cb){
            
            var promise = $http.get('http://localhost:3000/api/articles');
            
            promise.then(function(res){
                
                article.model.list = res.data;
                
                if(cb){
                    cb(res);
                }
                
            });
            
            return promise;
            
        },
        saveArticle:function(articleData, cb){
            
            $http.post('http://localhost:3000/api/article', articleData)
                .then(function(res){
               
                if(cb){
                    cb();
                }
                console.log(res);
                
            });
            
        },
        deleteArticle:function(id){
            
            $http.delete('http://localhost:3000/api/article/'+id)
                .then(function(res){
                
                for(var i=0;i<article.model.list.length;i++){
                    
                    if(article.model.list[i]._id === id){
                       article.model.list.splice(i, 1); 
                    }
                    
                }
                
            });
            
        },
        updateArticle:function(){
            
            
            
        }
    };

	return article;
});