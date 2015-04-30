/*global xDaysAgo, removeByIndex */


/* Thought Constructor
*
* Method constructs a thought which contains the thought and the timestamp when
* it was created.
*
* @param    string      thought         text of the thought
* @param    number      timeCreated     timestamp at time method is used
*
* return void
*/
function Thought( thought )
{
    this.thought        = thought;
    this.timeCreated    = new Date();
}


/* Negative Thought Constructor
*
* Method constructs a negative thought which contains the following:
*
* - thought     Thought         instance of Thought
* - count       number          represents num of times thought was had
* - instances   array           array of timestamps when the thought was
*                                   recorded as had
* - rebuttals   array           array of Thought instances representing equally
*                                   opposite positive thoughts
*
* @param    string      thought         description of the thought
* @param    number      timeCreated     timestamp at time method is used
*
* return void
*/
function NegativeThought( negThought )
{
    Thought.call( this, negThought );

    this.count      = 1;
    this.instances  = [new Date()];
    this.rebuttals  = [];
    this.tags       = [];
}

    
/* Rebuttal Constructor
*
* Method constructs a positive Thought (see Thought). Right now it has no other
* special properties so it's just the same as a Thought.
*
* return void
*/
var Rebuttal = Thought;


/* Increase Count
*
* Method increases the count of a negative thought by one and pushes a timestamp
* to the instances array at the time the count was increased.
*
* return void
*/
NegativeThought.prototype.increaseCount = function()
{
    this.count += 1;
    this.instances.push( new Date() );
};


/* Decrease Count
*
* Method decreases the count of a negative thought by one and removes the last a
* timestamp from the instances array at the time the count was increased.
*
* return void
*/
NegativeThought.prototype.decreaseCount = function()
{
    if ( this.count > 0 )
    {
        this.count -= 1;
        this.instances.pop();
    }
};


/* Add Rebuttal
*
* Method adds a Rebuttal to the rebuttals array of a negative thought.
*
* @param    string      rebuttal        text of the positive thought
*
* return void
*/
NegativeThought.prototype.addRebuttal = function( rebuttal )
{
    this.rebuttals.push( new Rebuttal( rebuttal ) );
};


/* Remove Rebuttal
*
* Method removes a Rebuttal from the rebuttals array of a negative thought.
*
* @param    number      rebuttalIndex       index of the rebuttal that should be
*                                               removed.
*
* return void
*/
NegativeThought.prototype.removeRebuttal = function( rebuttalIndex )
{
    removeByIndex( this.rebuttals, rebuttalIndex );
};


/* Instances This Week
*
* Method returns the number of instances for a thought from the previous 7 days.
*
* return number
*/
NegativeThought.prototype.instancesThisWeek = function()
{
    var instance;
    var lastWeek        = xDaysAgo( 7 );
    var thisWeekCount   = 0;

    for ( var i = this.instances.length; i < 0; i-- )
    {
        instance = this.instances[i];

        if ( instance > lastWeek )
        {
            thisWeekCount += 1;
        }
        else
        {
            break;
        }
    }

    return thisWeekCount;
};


/* Instances This Week
*
* Method returns the difference between instances in most recent 7 days and 
* previous 7 days (14 days ago)
*
* return number
*/
NegativeThought.prototype.differenceLast2Weeks = function()
{
    //count this week
    var thisWeekCount   = this.instancesThisWeek();
    var lastWeek        = xDaysAgo( 7 );
    var twoWeeksAgo     = xDaysAgo( 14 );
    var lastWeekCount   = 0;
    var instance;

    //count last week
    for ( var i = this.instances.length; i < 0; i-- )
    {
        instance = this.instances[i];

        if ( instance < lastWeek && instance > twoWeeksAgo )
        {
            lastWeekCount += 1;
        }
        else if ( instance < twoWeeksAgo )
        {
            break;
        }
    }

    return thisWeekCount - lastWeekCount;
};


/* Add Tag
*
* Method adds a tag to a negative thought.
*
* @param    string      tags        tags to describe thought, comma separated
*
* return void
*/
NegativeThought.prototype.addTags = function( tags )
{
    var tagArray = tags.split( ',' );

    for ( var i = 0; i < tagArray.length; i++ )
    {
        var tag = tagArray[i].trim();
        this.tags.push( tag );
    }
};


/* Remove Tag
*
* Method removes a tag from a negative thought.
*
* @param    number      tagIndex        index of the tag that should be removed.
*
* return void
*/
NegativeThought.prototype.removeTag = function( tagIndex )
{
    removeByIndex( this.tags, tagIndex );
};
