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

# examples:

- Green bar:
![ok](/img/ok.png)

- Red bar:
![bad](/img/bad.png)

- Oragen bar (tests .done() but without assertions):
![risky](/img/risky.png)

- No  bar (tests without .done() call):
![notdone](/img/notdone.png)


