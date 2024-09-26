/* eslint-disable filenames/match-exported */

import { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  roots: ['<rootDir>/test'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: false,
      },
    ],
  },
};

export default config;
