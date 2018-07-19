function pullTests(elem) {
    let tests = [];

    for (let i = 0; i <= elem.children.length / 3; i++)
        try {
            tests.push({
                input: elem.children[i * 3].innerText,
                output: elem.children[(i * 3) + 1].innerText
            })
        } catch (e) {
        }
    return tests
}

console.log(JSON.stringify(pullTests(document.getElementById('tests'))))