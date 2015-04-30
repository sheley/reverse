/*global NegativeThought, removeByIndex */

/* Brain Constructor
*
* Method constructs a Brain that contains a name and an array of negative thought
* objects
*
* @param    string      name            a person's name i guess
*
* return void
*/
function Brain( name )
{
    this.name = name;
    this.negativeThoughts = [];
}


/* Add Negative Thought
*
* Method adds a Negative Thought to the negative thought array of a Brain.
*
* @param    negative thought      negThought        instance of negative thought
*
* return void
*/
Brain.prototype.addNegativeThought = function( negThought )
{
    this.negativeThoughts.push( new NegativeThought( negThought ) );
};


/* Remove Negative Thought
*
* Method removes a Negative Thought from the negative thought array of a Brain.
*
* @param    number      negThoughtIndex        index of negative thought
*
* return void
*/
Brain.prototype.removeNegativeThought = function( negThoughtIndex )
{
    removeByIndex( this.negativeThoughts, negThoughtIndex );
};


/* Random Rebuttal
*
* Method returns the thought property of a rebuttal that is randomly selected.
*
* return void
*/
Brain.prototype.randomRebuttal = function()
{
    //choose a random negative thought in neg thoughts array
    //then choose a  random rebuttal from neg thought
    //if one doesn't exist try another random neg thought
};


/* Negative Thought Count
*
* Method returns the total number of negative thoughts inside a Brain.
*
* return void
*/
Brain.prototype.negThoughtCount = function()
{
    return this.negativeThoughts.length;
};


/* Rebuttal Count
*
* Method returns the total number of rebuttals for all negative thoughts inside
* a Brain.
*
* return void
*/
Brain.prototype.rebuttalCount = function()
{
    //reduce each negative thought to its rebuttal length and sum them
};


/* Thoughts By Tag
*
* Method returns all thought properties of a negatives thoughts in a brain that
* contain the specified tag.
*
* @param    string      tag         tag to search for
*
* return void
*/
Brain.prototype.thoughtsByTag = function( tag )
{
    var matchedThoughts = [];

    for ( var i = 0; i < this.negativeThoughts.length; i++ )
    {
        if ( this.negativeThoughts[i].tags.indexOf( tag ) !== -1 )
        {
            matchedThoughts.push( this.negativeThoughts[i] );
        }
    }

    return matchedThoughts;
};
