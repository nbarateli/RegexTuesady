const reg = /(\b[\w]+'*[\w]*\b)(\s+)(\b\1\b)(\s*)/ig;
const replace = '$1$2<strong>$3</strong>$4'


const tests = [{"input": "This is a test", "output": "This is a test"}, {
    "input": "This is is a test",
    "output": "This is <strong>is</strong> a test"
}, {
    "input": "This test test is is",
    "output": "This test <strong>test</strong> is <strong>is</strong>"
}, {"input": "This test is a test", "output": "This test is a test"}, {
    "input": "This this test is a test",
    "output": "This <strong>this</strong> test is a test"
}, {
    "input": "cat dog dog cat dog",
    "output": "cat dog <strong>dog</strong> cat dog"
}, {"input": "This test is a test tester", "output": "This test is a test tester"}, {
    "input": "hello world hello world",
    "output": "hello world hello world"
}, {
    "input": "This nottest test is something",
    "output": "This nottest test is something"
}, {
    "input": "This is IS a test",
    "output": "This is <strong>IS</strong> a test"
}, {
    "input": "<Mack> I'll I'll be be back back in in a a bit bit.",
    "output": "<Mack> I'll <strong>I'll</strong> be <strong>be</strong> back <strong>back</strong> in <strong>in</strong> a <strong>a</strong> bit <strong>bit</strong>."
}]

function testAll(tests, regex, replace) {
    let count = 0;
    tests.forEach((test, i) => {

        let pass;
        count += (pass = test.input.replace(regex, replace) === test.output);
        console.log((pass ? "passed " : "failed ") + (i + 1));

    });
    return "paassed " + count + " out of " + tests.length + " tests."
}

console.log(testAll(tests, reg, replace))