#!/bin/bash

# I like to place temporary files under "var" inside a project directory tree. But it's up to you where you want it.
# just remember to include it on .gitignore and inotifywait exclusions if you place them in the project directory.
# the main advantage is to be able to create a browser bookmark with the report of the code coverage, mentioned at the bottom.
COVERAGE_DIR=var/coverage

mkdir -p $COVERAGE_DIR


# should point to project root which has to be the current directory
RUTA=$(pwd)

# full name of this script
SELF=$(realpath $0)
TESTPATH=$(dirname $SELF)

 
RUNNER=$RUTA/node_modules/myjsunit/myrunner.js
if [ ! -e $RUNNER ]; then
    echo "MISSING RUNNER: "$RUNNER 
    exit 1
fi

SUITE=./tests/sampleTestSuite.js

# we have to assume "time" does exist.

time NODE_V8_COVERAGE=/tmp/cca c8 -o var/coverage -x testsjs/ -r html node $RUNNER $RUTA/$SUITE
RC=$?

if [ $RC -ne 0 ]; then
    exit $RC
fi

# generate summary of coverage and link to the detailed html version
NODE_V8_COVERAGE=/tmp/cca c8 report -r text-summary > $COVERAGE_DIR/coverage-summary.txt

cat $COVERAGE_DIR/coverage-summary.txt

echo
echo "coverage details in html format: " "file://$(pwd)/$COVERAGE_DIR/index.html"
echo
echo Done!

exit 0