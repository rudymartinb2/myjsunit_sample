/* sampleAsync 
 * RMB Jan 28, 2026 
 * 
 */

function sampleAsync( fn ) {
    if( false ){
        throw new Error("sample for code coverage")
    }
    setTimeout( fn, 0 );
}

export { sampleAsync }
