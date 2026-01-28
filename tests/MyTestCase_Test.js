import { Test } from 'myjsunit';

import { sampleAsync } from "../src/sampleAsync.js";
class MyTestCase_Test extends Test {
    test_example_true() {
        this.assertTrue(true, 'Example test case should pass');
        this.done();
    }

    test_example_callback() {
        let self = this;
        let fn = function(){
            self.assertTrue(true, 'Example test case should pass');
            self.done();
        }; 
        sampleAsync(fn);
    }
}
 
export { MyTestCase_Test };