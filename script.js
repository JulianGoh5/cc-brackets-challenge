const keyValue = {
    1: "(",
    2: ")",
    3: "{",
    4: "}",
    5: "[",
    6: "]",
};

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])
        ? "YES"
        : "NO";
}

function isBalanced(s) {
    const convertedInput = s.split("").map((letter) => {
        return Object.keys(keyValue).find((key) => keyValue[key] === letter);
    });
    const convertedInputLength = convertedInput.length;
    const firstHalf = convertedInput.slice(0, convertedInputLength / 2);
    const secondHalf = convertedInput
        .slice(convertedInputLength / 2, convertedInputLength)
        .map((e) => Number(e));

    const verify = firstHalf.reverse().map((e) => Number(e) + 1);

    return arrayEquals(secondHalf, verify);
}

function isBalancedv2(s) {
    const convertedInput = s.split("").map((letter) => {
        return Object.keys(keyValue).find((key) => keyValue[key] === letter);
    });

    const convertedInputLength = convertedInput.length;

    if (convertedInputLength % 2 === 1) {
        return "NO";
    }

    const convertedInputNumbers = convertedInput.map((e) => Number(e));
    console.log(convertedInputNumbers);

    let i = 0;
    for (a = 0; a <= convertedInputLength/2; a++) {
        if (convertedInputNumbers.includes(convertedInputNumbers[i] + 1)) {
            const first = convertedInputNumbers.indexOf(
                convertedInputNumbers[i],
            );
            const second = convertedInputNumbers.indexOf(
                convertedInputNumbers[i] + 1,
            );
            convertedInputNumbers.splice(first, 1);
            convertedInputNumbers.splice(second - 1, 1); //Accommodate for first being spliced away
        }
        console.log(convertedInputNumbers);
    }

    return convertedInputNumbers.length > 0 ? "NO" : "YES";
}


const finalResult = [
    isBalancedv2("{[()]}"),
    isBalancedv2("{[(])}"),
    isBalancedv2("{{[[(())]]}}"),
    isBalancedv2("{{([])}}"),
    isBalancedv2("{{)[](}}"),
    isBalancedv2("{(([])[])[]}"),
    isBalancedv2("{(([])[])[]]}"),
    isBalancedv2("{(([])[])[]}[]"),
];

console.log(finalResult);