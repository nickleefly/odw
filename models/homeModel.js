/**
Provides the models for the application

@module api/models
**/

module.exports = homeModel;
function homeModel(){
    this.title = 'ODW';
}

//Init the model with the given data
FeatureListPageModel.prototype.Init = function(mlsID, callback)
{
    this.mlsID = mlsID;
    this.loadFeatures(mlsID,callback);
    this.loadCategories(callback);
    this.error = null;
}

//Fills the data for this model object
FeatureListPageModel.prototype.fillData = function(featurelist, categorieslist, callback){

    //mlsid was loaded on init
    //this.mlsID = mlsid;

    //set the title
    this.title = 'Movoto - Feature Mapping Tool';
    //this could be avoided by assigning it directly in the loadFeatures function, but it's stated here for clarity
    this.features = featurelist;
    //this could be avoided by assigning it directly in the loadCategories function, but it's stated here for clarity
    this.categories = categorieslist;
    callback();
};

//Load the features from the service
FeatureListPageModel.prototype.loadFeatures = function(mlsId, callback){
    var that = this;
    FeatureListService.GetFeatureDataByMls(mlsId, function(err, e){
    that.featureData = e;
    that.finish(callback);
    });
};

//Load the categories from the service
FeatureListPageModel.prototype.loadCategories = function(callback){
    var that = this;
    CategoryListService.GetCategories(function(err, e){
    that.categoriesData = e;
    that.finish(callback);
    });
};

//Once all services have responded, finish the operations
FeatureListPageModel.prototype.finish = function(callback){
  if (this.categoriesData && this.featureData) {
    this.fillData(this.featureData,this.categoriesData, callback);
  }
};
