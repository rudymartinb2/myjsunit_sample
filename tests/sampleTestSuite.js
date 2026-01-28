/* sampleTestSuite
 * 
 */


import { TestSuite } from "myjsunit" ;

// normally I would create subdirectories under tests/
// just to mirror production source code directory tree
import { MyTestCase_Test } from "./MyTestCase_Test.js" ;
import { MyBad_Test } from "./MyBad_Test.js" ;
import { MyRisky_Test } from "./MyRisky_Test.js" ;
import { NotDone_Test } from "./NotDone_Test.js" ;

class sampleTestSuite extends TestSuite {
    start(){
        this.addTest( MyTestCase_Test ); // only constructor is needed.
        
        // uncomment to see a risky test example
//        this.addTest( MyRisky_Test ); 
        
        // uncomment the next line to see a fail example.
//        MyBad_Testthis.addTest( MyBad_Test ); 


        // uncomment to how an example of a test without a .done() call. 
        // while it does exit, it gives no summary of what happened.
//        this.addTest( NotDone_Test ); 
        this.run();
    }
}

export {  sampleTestSuite }