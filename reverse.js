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
    this.timeCreated    = Date.now();
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
    this.instances  = [Date.now()];
    this.rebuttals  = [];
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
    this.instances.push( Date.now() );
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
    if ( typeof this.rebuttals[rebuttalIndex] !== 'undefined' )
    {
        this.rebuttals = this.rebuttals.slice( rebuttalIndex, 1 );        
    }
};



