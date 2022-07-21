function isBalanced(s) {
    let stack = [];
    for(const char of s) {
        // Use our stack to keep track of open brackets.
        if("([{".includes(char)) {
            stack.push(char); 
            continue; // Shortcut this iteration;
        }
        
        // If we find a close bracket and the top
        // of the stack doesn't match, then the
        // brackets aren't balanced, we can bail out.
        if(
            (char === ")" && stack.pop() !== "(") ||
            (char === "]" && stack.pop() !== "[") ||
            (char === "}" && stack.pop() !== "{") 
        ){
            return "NO";
        }
    }
    
    // Make sure our stack is empty and we don't
    // have any leftover brackets.
    return stack.length === 0 ? "YES" : "NO";
}

console.log(isBalanced(input));


(([{}]))
([)]