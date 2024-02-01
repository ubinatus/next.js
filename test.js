const x = require('./packages/next-swc/native/index.wasi.cjs')

const { getTargetTriple, transformSync } = x

console.log('exports', x)
console.log('target triple', {
  triple: getTargetTriple(),
})

const output = transformSync(
  `console.log("hello world");`,
  true,
  Buffer.from(JSON.stringify({}))
)

console.log('transformSync', { output })
