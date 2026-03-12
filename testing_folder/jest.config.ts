import {Config} from '@jest/types'

const config: Config.InitialOptions = {
    preset: 'tsx-jest',
    testEnvironment: 'node',
    verbose: true
}

export default config;