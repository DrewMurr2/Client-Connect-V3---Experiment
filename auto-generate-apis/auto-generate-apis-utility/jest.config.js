module.exports = {
    globals: {
        'ts-jest': {
            tsConfigFile: 'tsconfig.json'
        }
    },
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    transform: {
        '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
    },
    testMatch: [
        '**/src/**/*.spec.(ts|js)'
    ],
    testEnvironment: 'node',
    "watchPathIgnorePatterns": [
        "<rootDir>/node_modules/",
        "<rootDir>/folder_for_testing/",
        "(.test)\\.(ts|tsx|js)$",
        "/distribution/.*\\.(ts|js)$"
    ]
};