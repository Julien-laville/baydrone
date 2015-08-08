var adminUser = (function(){
    return  {
        remove : function(id) {
            var removePromise = promise.post('admin/user/' + id + '/delete');
            removePromise.then(function(error, data) {
                console.log(data)
            })
        }
    }
});