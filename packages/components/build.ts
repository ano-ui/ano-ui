import fs from 'fs-extra'

const buildPath = 'dist'

fs.ensureDirSync(buildPath)
fs.emptyDirSync(buildPath)

fs.copySync('uni_modules', buildPath)

fs.copySync('./package.json', `./${buildPath}/package.json`)
