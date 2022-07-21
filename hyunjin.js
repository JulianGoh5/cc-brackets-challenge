function isBalanced(s) {
    let a = []
    for (let c of s) {
        if (c == '{' || c == '[' || c == '(') { 
            a.push(c)
        } else if (a.length > 0) {
            let d = c.charCodeAt(0) - a.pop().charCodeAt(0)
            if (!(0 < d && d < 3)) {
                return "NO"
            }
        } else return "NO"
    }
  
    return a.length > 0 ? "NO" : "YES"
}
console.log(isBalanced(input));