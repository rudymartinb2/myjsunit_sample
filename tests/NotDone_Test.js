/* NotDone_Test 
 * RMB Jan 28, 2026 
 * 
 * it could happen when you have async operations and .done() is called from a local test callback
 * it can be messy to track, in that case what I do is comment out tests until I find the culprit.
 */
import { Test } from 'myjsunit';
class NotDone_Test extends Test {
    test_not_done(){
        this.assertTrue( true );
        
    }
}

export { NotDone_Test }
