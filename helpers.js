var removeByIndex = function( arr, index )
{
    if ( arr[index] )
    {
        arr = arr.slice( index, 1 );        
    }  
};


var xDaysAgo = function( x )
{
    var now      = Date.now();
    var xDaysAgo = now - ( x * 86400000 );

    return new Date( xDaysAgo );
};


var randomFromArray = function( arr )
{
    return arr[Math.floor( Math.random() * arr.length )];
};
