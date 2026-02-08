import { execSync } from 'node:child_process'

const minNode = [20, 19, 0]
const minNpm = [10, 0, 0]

const parse = (version) => version.replace(/^v/, '').split('.').map((p) => Number.parseInt(p, 10))

const gte = (actual, min) => {
  for (let i = 0; i < Math.max(actual.length, min.length); i += 1) {
    const a = actual[i] ?? 0
    const b = min[i] ?? 0
    if (a > b) return true
    if (a < b) return false
  }
  return true
}

const node = parse(process.version)
const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim()
const npm = parse(npmVersion)

if (!gte(node, minNode)) {
  console.error(
    `Node ${process.version} is not supported. Required: >= ${minNode.join('.')}. Use: nvm use`,
  )
  process.exit(1)
}

if (!gte(npm, minNpm)) {
  console.error(`npm ${npm.join('.')} is not supported. Required: >= ${minNpm.join('.')}.`)
  process.exit(1)
}

console.log(`Environment OK: node ${process.version}, npm ${npm.join('.')}`)
