export function argsToObj(..._) {
    const args = Array.from(arguments).flat();
    const opts = args.slice(2);
    const result = {};
    let lastKey = null;
    for (let i = 0; i < opts.length; i++) {
        const opt = opts[i];
        if (/^--/.test(opt) || /^-[a-z]$/i.test(opt)) {
            result[opt] = true;
            lastKey = opt;
            continue;
        }
        if (null === lastKey)
            throw `Syntax error at ${opt}`;
        result[lastKey] = opt;
        lastKey = null;
    }
    return result;
}
/**
 * Reads the `process.argv` values and converts them into a key-value pairs object
 * @returns {options} A key-value pairs object
 * @example
 * // app.js
 * // Your CLI file
 * import cliToObject from '../dist/app.js'
 * const v = cliToObject();
 * console.log(v);
 *
 * @example
 *
 * ```sh
 * # run from command line
 * /path/to/app.js --name John --age 23 --is-adult
 * # logs out: { '--name': 'John', '--age': '23', '--is-adult': true }
 * ```
 */
export default function cliToObject() {
    return argsToObj(...process.argv);
}
// TODO Finish bundling https://medium.com/swlh/how-to-create-and-publish-an-npm-package-17b5e1744f26
