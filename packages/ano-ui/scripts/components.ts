import fs from 'fs-extra'

fs.removeSync('components')
fs.ensureDirSync('components')

fs.copySync('../components/', 'components/')
fs.removeSync('components/tsconfig.json')
