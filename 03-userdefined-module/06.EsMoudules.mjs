const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mul = (a, b) => a * b;

// export default { add, sub, mul };

export { add, sub, mul };

/**
    export default { ... } → import with import variable from "...".
    You do not need a named variable for export default, 
    but you must import it as a default, not as named.

    export { ... } → import with import { name } from "...".


 */
