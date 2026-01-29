# myjsunit sample project

- The idea is to illustrate workflow and the proposed scripts involved.
- After cloning this repo you will need to import ```myjsunit```

```bash
npm i https://github.com/rudymartinb2/myjsunit.git
```

then you can run tests from this project's root:

```bash
./tests/run_tests.sh
```

If you lack some dependencies like c8 you can run the minimal version
```bash
./tests/run_tests_minimal.sh
```

Also: the goal of ```./tests/autoruntests.sh``` is to keep it running on a virtual terminal while working with your IDE (my choice is Netbeans). If you have ```inotify-tools``` installed you can run the tests each time you save the files on disk.

# examples:

- Green bar:
![ok](/img/ok.png)

- Red bar:
![bad](/img/bad.png)

usually when I start a new test file I import ```TestBad``` from myjsunit, so the test will fail even with no test methods. And that tells me the test file has been added to the suit correctly. Like this:

```javascript
/* MyBad_Test 
 * RMB Jan 28, 2026 
 * 
 * I use code like this when setting up a new test file,
 * just to ensure it is working as intended: it should fail
 */

import { Test, TestBad } from 'myjsunit';
class MyBad_Test extends TestBad {

}

export { MyBad_Test }
```

- Oragen bar (tests .done() but without assertions):
![risky](/img/risky.png)

- No  bar (tests without .done() call):
![notdone](/img/notdone.png)

normal scenario for this to happen: .done() inside a callback and it does not get invoked at all.
