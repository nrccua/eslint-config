# [3.0.0](https://github.com/nrccua/eslint-config/compare/v2.8.0...v3.0.0) (2025-06-30)


### chore

* Update packages to latest possible ([#49](https://github.com/nrccua/eslint-config/issues/49)) ([1d9b773](https://github.com/nrccua/eslint-config/commit/1d9b77340ef715745984e8af2ef0ab36820ce98a))


### BREAKING CHANGES

* * @typescript-eslint has deprecated a few rules, in favor of pushing them upstream to eslint's base rules or to the plugin @stylistic/eslint-plugin. See https://typescript-eslint.io/blog/deprecating-formatting-rules/#upgrading-to-eslint-stylistic for more information. The following rules were tweaked as a result.
    * @typescript-eslint/member-delimiter-style -> @stylistic/eslint-plugin/member-delimiter-style
    * @typescript-eslint/type-annotation-spacing -> `@stylistic/type-annotation-spacing'
    ( @typescript-eslint/no-throw-literal -> no-throw-literal

* feat: add examples for nest and storybook

* fix: revert version number and allow semantic release to handle

* fix: move peerDependencies back to dependencies

* fix: move frontend deps back into dependencies

* fix: remove empty peerDepencies from package.json

# [2.8.0](https://github.com/nrccua/eslint-config/compare/v2.7.0...v2.8.0) (2024-09-27)


### Features

* Bumps eslint-plugin-react to ^7.37.0 ([f05e350](https://github.com/nrccua/eslint-config/commit/f05e35097997eab169b2604ae87fd7a6d776b125))

# [2.7.0](https://github.com/nrccua/eslint-config/compare/v2.6.1...v2.7.0) (2024-09-27)


### Features

* Bump eslint-config-prettier from 8.10.0 to 9.1.0 ([2e1fd6a](https://github.com/nrccua/eslint-config/commit/2e1fd6a0be26b389c49c2065be092392bb5f5c75))

## [2.6.1](https://github.com/nrccua/eslint-config/compare/v2.6.0...v2.6.1) (2024-09-27)


### Reverts

* Revert "Bump eslint-config-prettier from 8.10.0 to 9.1.0" ([#43](https://github.com/nrccua/eslint-config/issues/43)) ([08b235b](https://github.com/nrccua/eslint-config/commit/08b235b85bfb646b9478038ab309bfe70b9e126d)), closes [#37](https://github.com/nrccua/eslint-config/issues/37)

# [2.6.0](https://github.com/nrccua/eslint-config/compare/v2.5.0...v2.6.0) (2024-09-27)


### Features

* Bump eslint-plugin-security from 1.7.1 to 3.0.1 ([#39](https://github.com/nrccua/eslint-config/issues/39)) ([436c612](https://github.com/nrccua/eslint-config/commit/436c61283c7115b4b8040b5be3da4caeb3961005))

# [2.5.0](https://github.com/nrccua/eslint-config/compare/v2.4.0...v2.5.0) (2024-09-27)


### Features

* Bump eslint-plugin-promise from 6.6.0 to 7.1.0 ([#40](https://github.com/nrccua/eslint-config/issues/40)) ([7be1832](https://github.com/nrccua/eslint-config/commit/7be18321ff791e7d55c34336a44300a3f5a98106))

# [2.4.0](https://github.com/nrccua/eslint-config/compare/v2.3.0...v2.4.0) (2024-09-26)


### Features

* Remove deprecated max-len rule, as it is conflicting with prettier anyway ([ff798fb](https://github.com/nrccua/eslint-config/commit/ff798fb8c7c83d2d117b28fe3e2d5083a4e93ef8))

# [2.3.0](https://github.com/nrccua/eslint-config/compare/v2.2.0...v2.3.0) (2024-09-26)


### Features

* Added support for eslint-plugin-regex ([ab6c5a7](https://github.com/nrccua/eslint-config/commit/ab6c5a787da9d0faf589d97fbaeec294bcc693cb))

# [2.2.0](https://github.com/nrccua/eslint-config/compare/v2.1.1...v2.2.0) (2024-09-26)


### Features

* Added support for next.js rules, storybook rules, mdx rules, sort-keys-fix ([033a67f](https://github.com/nrccua/eslint-config/commit/033a67f67bff0fb4f8b303f58984886a542c0be3))

## [2.1.1](https://github.com/nrccua/eslint-config/compare/v2.1.0...v2.1.1) (2024-09-26)


### Bug Fixes

* Open up semver ranges ([dd3edf1](https://github.com/nrccua/eslint-config/commit/dd3edf104f8d76b946e6417017bf4d3570c4ca1e))

# [2.1.0](https://github.com/nrccua/eslint-config/compare/v2.0.0...v2.1.0) (2024-09-26)


### Features

* Added eslint-import-resolver-node and eslint-import-resolver-typescript to the core setup ([aae9898](https://github.com/nrccua/eslint-config/commit/aae98982cda9172bca787d3f2102bf8f6830ccb5))

# [2.0.0](https://github.com/nrccua/eslint-config/compare/v1.0.0...v2.0.0) (2024-09-26)


### Documentation

* Remove spaces ([99593da](https://github.com/nrccua/eslint-config/commit/99593da918ec939cfcc2b3b8f460704ce559b776))


### BREAKING CHANGES

* Publish as 2.0.0 due to Nestjs config file renaming

# 1.0.0 (2024-09-26)


### Bug Fixes

* Fix path to git repository ([#41](https://github.com/nrccua/eslint-config/issues/41)) ([894db24](https://github.com/nrccua/eslint-config/commit/894db24e9f72038034699e82dd7326146fccb476))
* Remove peer deps specifications, since all of those packages are already housed in deps ([c20e260](https://github.com/nrccua/eslint-config/commit/c20e260d9b0306df95eb5d369462217b538e8848))


### Features

* Updated library versions; Added examples for dog-fooding; Automated release process; Node 22 upgrade ([#35](https://github.com/nrccua/eslint-config/issues/35)) ([19d7424](https://github.com/nrccua/eslint-config/commit/19d74248bca73b019fe2f15f2f2b15bcf53ef07e))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.5.0](https://github.com/nrccua/eslint-config/compare/1.4.4...1.5.0) (2023-09-15)


### Changes

* Fix the github url + update readme instructions ([12088cc](https://github.com/nrccua/eslint-config/commit/12088cc9182a33a670d3af459c13c4f06b1c80bc))
* 1.4.4 ([d8db4bb](https://github.com/nrccua/eslint-config/commit/d8db4bb8d2d1fbee0a580c85136dc00fb705ce17))

### [1.4.4](https://github.com/nrccua/eslint-config/compare/1.4.3...1.4.4) (2023-09-15)


### Changes

* Try to update how the token is passed to npm publish ([781eb9e](https://github.com/nrccua/eslint-config/commit/781eb9e6bcffbbb07b158cbc0fed8cda832f3a0a))
* 1.4.3 ([c20a2b7](https://github.com/nrccua/eslint-config/commit/c20a2b78762d596752587ddd5c16e08b50d9bc44))

### [1.4.3](https://github.com/nrccua/eslint-config/compare/1.4.2...1.4.3) (2023-09-15)


### Changes

* Fix publish workflow ([6cb109f](https://github.com/nrccua/eslint-config/commit/6cb109f5e9858d56f61a21f4e0d5a80f50020604))
* 1.4.2 ([c275d7d](https://github.com/nrccua/eslint-config/commit/c275d7d02804bdc315b97bf0331c8c7b48222394))

### [1.4.2](https://github.com/nrccua/eslint-config/compare/1.4.1...1.4.2) (2023-09-15)


### Changes

* Publish at the same node version we're testing against ([4fcb287](https://github.com/nrccua/eslint-config/commit/4fcb287766266b68690ae7b5ea292948c3c6fd2d))
* Update to 1.4.1 ([08e4d29](https://github.com/nrccua/eslint-config/commit/08e4d29d983c446a15f22b984e7cc4dd04dabdea))

### [1.4.1](https://github.com/nrccua/eslint-config/compare/1.4.0...1.4.1) (2023-09-15)


### Changes

* Make publish run on published instead of created ([d7b5903](https://github.com/nrccua/eslint-config/commit/d7b59036cd5987c47783c8b61dcb300635bdda00))
* Update version to 1.4.0; make this an npm package ([eba98da](https://github.com/nrccua/eslint-config/commit/eba98daa48bf1225f6e50165800b5a5c2d67320f))

## [1.4.0](https://github.com/nrccua/eslint-config/compare/1.3.2...1.4.0) (2023-09-15)


### Changes

* Update downstream packages ([1106598](https://github.com/nrccua/eslint-config/commit/1106598811f590c59fd8433183b647c57069e675))
* Merge pull request #27 from nrccua/updatedependencies_202307 ([3d50967](https://github.com/nrccua/eslint-config/commit/3d509673d74260d72a72446651a9a6f3518f44af)), closes [#27](https://github.com/nrccua/eslint-config/issues/27)
* [DA-3]: 1.3.2 ([82c1ee5](https://github.com/nrccua/eslint-config/commit/82c1ee568283c81c0e35823059fe510e20aaa761))

### [1.3.2](https://github.com/nrccua/eslint-config/compare/1.2.5...1.3.2) (2023-07-20)


### Changes

* [DA-3]: Remove unused rule; replace with TS compiler option ([5f6e783](https://github.com/nrccua/eslint-config/commit/5f6e7837d3f58d6a1087eb6813b6de6ec8df7b62))
* [DA-3]: Fix bad version # in changelog ([00d9227](https://github.com/nrccua/eslint-config/commit/00d9227dac0fb8a8755ab9b4645c7226925d3cca))
* [DA-3]: Update Chnagelog ([4cffd16](https://github.com/nrccua/eslint-config/commit/4cffd16ca9226cc94120b361522e9d9b0f480049))
* [DA-3]: Remove tsc tests + add json to prettier ([34bb52b](https://github.com/nrccua/eslint-config/commit/34bb52bc0cb32b1e4a47664a7e283ffedb0cb100))
* Merge remote-tracking branch 'origin/main' into updatedependencies_202307 ([888ea04](https://github.com/nrccua/eslint-config/commit/888ea04756d791b32c8148670b560ca530a7ac19))
* [DA-3]: Update node version in GitHub action ([a7165c5](https://github.com/nrccua/eslint-config/commit/a7165c5d24a095445dda1f7800619a449323d328))
* Merge pull request #26 from nrccua/feature/package-refresh ([5c6157d](https://github.com/nrccua/eslint-config/commit/5c6157d757b52b7f265bc5d5d88c1ac64d54f855)), closes [#26](https://github.com/nrccua/eslint-config/issues/26)
* [DA-3]: Update version to 1.3.0 ([7505d03](https://github.com/nrccua/eslint-config/commit/7505d0340e7412e01a51f376d2cac09a51955a14))
* [DA-3]: Update to Node 16 + all dependencies ([c18cf5b](https://github.com/nrccua/eslint-config/commit/c18cf5bd0397940f79171c5fa2fa937fc2fe583c))
* Merge pull request #25 from nrccua/joncursi-patch-1 ([06a6c13](https://github.com/nrccua/eslint-config/commit/06a6c13a83c9dc5fb4819ebc3b59b8110e9eadd2)), closes [#25](https://github.com/nrccua/eslint-config/issues/25)
* Update README.md ([f3029ba](https://github.com/nrccua/eslint-config/commit/f3029baf8ba0b140303d35b4b19edffaa758a4f1))
* Merge pull request #24 from nrccua/update/dependencies_202202 ([3ff4c35](https://github.com/nrccua/eslint-config/commit/3ff4c35342e1be6a6b91141f1fdd38f0174fa08e)), closes [#24](https://github.com/nrccua/eslint-config/issues/24)
* [E4E-0]: 1.2.5 ([eb0e6a3](https://github.com/nrccua/eslint-config/commit/eb0e6a3946bb6c990514af2235573eb5402627f7))

### [1.2.5](https://github.com/nrccua/eslint-config/compare/1.2.4...1.2.5) (2022-02-08)


### Changes

* [E4E-0]: Update dependencies to resolve audit issues ([6102393](https://github.com/nrccua/eslint-config/commit/610239354dccf786c9dfdcdcce123b3993d40a9a))
* Merge pull request #23 from nrccua/feature/printWidth_by_file_type ([861add4](https://github.com/nrccua/eslint-config/commit/861add4cdd1c29451cfa938b51725b0fc7a736a2)), closes [#23](https://github.com/nrccua/eslint-config/issues/23)
* [E4E-0]: 1.2.4 ([a0dfc4c](https://github.com/nrccua/eslint-config/commit/a0dfc4c610effae66435fb12180e32b2da0106b6))
* Merge pull request #22 from nrccua/feature/printWidth_by_file_type ([79d64a7](https://github.com/nrccua/eslint-config/commit/79d64a734c27ba8c2e1db6b2c387011f7ccf6f0f)), closes [#22](https://github.com/nrccua/eslint-config/issues/22)
* Merge pull request #21 from nrccua/feature/printWidth_by_file_type ([a0f8a7f](https://github.com/nrccua/eslint-config/commit/a0f8a7f33988909262f99b6103cc71d0ae4cd46f)), closes [#21](https://github.com/nrccua/eslint-config/issues/21)
* Merge pull request #20 from nrccua/feature/printWidth_by_file_type ([88ca560](https://github.com/nrccua/eslint-config/commit/88ca56048cd729664bcb423f2f5d251108b99315)), closes [#20](https://github.com/nrccua/eslint-config/issues/20)

### [1.2.4](https://github.com/nrccua/eslint-config/compare/1.2.3...1.2.4) (2021-12-18)


### Changes

* [E4E-0]: Inject filenames/match-exported override directly into the nest tsConfig ([c9a8465](https://github.com/nrccua/eslint-config/commit/c9a8465b511c65ce615a7d99d7fc66e7b46e1825))
* [E4E-0]: 1.2.3 ([5485a47](https://github.com/nrccua/eslint-config/commit/5485a472d1315bbfb98ac9f3e911c88d0f733bc6))

### [1.2.3](https://github.com/nrccua/eslint-config/compare/1.2.2...1.2.3) (2021-12-17)


### Changes

* [E4E-0]: Remove console.log ([e411481](https://github.com/nrccua/eslint-config/commit/e411481cd7527f73477fb4db714eedf8b3639262))
* [E4E-0]: 1.2.2 (for real this time) ([b5c22a4](https://github.com/nrccua/eslint-config/commit/b5c22a43be1b1e8310c7a21f389cb2704a1547eb))

### [1.2.2](https://github.com/nrccua/eslint-config/compare/1.2.1...1.2.2) (2021-12-17)


### Changes

* [E4E-0]: Forgot to run prettier ([3e6279c](https://github.com/nrccua/eslint-config/commit/3e6279cd041fb41e539365d49e5aca351f7af802))
* [E4E-0]: 1.2.2 ([2e404e7](https://github.com/nrccua/eslint-config/commit/2e404e786ff1a334e0723272ae16e6bde35a8c61))
* [E4E-0]: Fix .nesteslintrc.js ([375fa0a](https://github.com/nrccua/eslint-config/commit/375fa0ab7c656ee0fa7907f68983e0327782f751))
* [E4E-0]: 1.2.1 ([8487afb](https://github.com/nrccua/eslint-config/commit/8487afb19fc7ac49685a3ff03f7e8e4998bf5907))

### [1.2.1](https://github.com/nrccua/eslint-config/compare/1.2.0...1.2.1) (2021-12-17)


### Changes

* [E4E-0]: Allow test files to avoid unbound-method errors ([631c61b](https://github.com/nrccua/eslint-config/commit/631c61b2eb958863885d2dce68f23d5b17ec3d12))
* [E4E-0]: 1.2.0 ([e92d2e8](https://github.com/nrccua/eslint-config/commit/e92d2e88c2338bcabadcbbd3a10662ddf9aec3ee))

## [1.2.0](https://github.com/nrccua/eslint-config/compare/1.1.2...1.2.0) (2021-12-15)


### Changes

* [E4E-0]: Fix some bad code/formatting ([153c536](https://github.com/nrccua/eslint-config/commit/153c53626ed03299c35167906ea863e814fc1910))
* [E4E-0]: 1.2.0 ([19895af](https://github.com/nrccua/eslint-config/commit/19895afeb694bfebeb2f6247991ac647ca29aa92))
* [E4E-0]: Make 120 default width except for tsx/jsx ([e32d9d1](https://github.com/nrccua/eslint-config/commit/e32d9d1a9f63346d2c10b6036dd0cb2c17f1fc45))
* [E4E-0]: Add a config for NestJS ([37d5898](https://github.com/nrccua/eslint-config/commit/37d5898a17baa5e0f5f1f41090e21dd9ffc22649))
* Merge pull request #19 from nrccua/fix/remove_enzyme ([ccb93af](https://github.com/nrccua/eslint-config/commit/ccb93af750a58eba6b9faabf891625042852b916)), closes [#19](https://github.com/nrccua/eslint-config/issues/19)
* [E4E-0]: 1.1.2 ([fbbf163](https://github.com/nrccua/eslint-config/commit/fbbf163f434032d818ba812cab0b4c83046c81ec))
* Merge pull request #18 from nrccua/fix/remove_enzyme ([ad18089](https://github.com/nrccua/eslint-config/commit/ad18089b652e44d91eea3bbc9e380d8fb688d219)), closes [#18](https://github.com/nrccua/eslint-config/issues/18)

### [1.1.2](https://github.com/nrccua/eslint-config/compare/1.1.1...1.1.2) (2021-12-08)


### Changes

* [E4E-0]: Fix issue with downstream packages trying to do git config --local ([c033af6](https://github.com/nrccua/eslint-config/commit/c033af6c35c0abbe94dc70f8e194dfa766e57ab0))
* [E4E-58]: 1.1.1 ([3730934](https://github.com/nrccua/eslint-config/commit/373093445957e51b1a8c790ad5178725e006cb5a))

### [1.1.1](https://github.com/nrccua/eslint-config/compare/1.1.0...1.1.1) (2021-12-08)


### Changes

* [E4E-58]: Remove enzyme in favor of react-testing-library ([f767320](https://github.com/nrccua/eslint-config/commit/f7673201894b88730db2ce6689094c9a199cae7b))
* Merge pull request #17 from nrccua/E4E-29 ([1f2df8e](https://github.com/nrccua/eslint-config/commit/1f2df8e25a0fea99c441324db5bee0ab6e1d3f67)), closes [#17](https://github.com/nrccua/eslint-config/issues/17)
* [E4E-29]: 1.1.0 ([f7684c1](https://github.com/nrccua/eslint-config/commit/f7684c10607caeb23dc9a6accffaa0aba4444f12))
* Merge pull request #16 from nrccua/E4E-29 ([ddb44a6](https://github.com/nrccua/eslint-config/commit/ddb44a6a9984569e0f8130e86902d13c8a2e6daa)), closes [#16](https://github.com/nrccua/eslint-config/issues/16)
* [E4E-29]: You'd think I could spell my own name ([4646530](https://github.com/nrccua/eslint-config/commit/46465302bd6a8ad84c7f3046d00311935fb996b7))

## [1.1.0](https://github.com/nrccua/eslint-config/compare/1.0.7...1.1.0) (2021-11-24)


### Changes

* [E4E-29]: Update pacckages to latest ([7e0d661](https://github.com/nrccua/eslint-config/commit/7e0d661a3a4ff8535ef9b3d9f6aff8a11b9c1ab8))
* 1.0.7 ([106985f](https://github.com/nrccua/eslint-config/commit/106985f4f18806bed665a7917602c01087e3b20b))

### [1.0.7](https://github.com/nrccua/eslint-config/compare/1.0.6...1.0.7) (2021-11-23)


### Changes

* Added peerDependencies for downstream ([3d5054c](https://github.com/nrccua/eslint-config/commit/3d5054c1a343220bff42b062daf39c470a024f5a))
* Merge pull request #15 from nrccua/E4E-29 ([7005333](https://github.com/nrccua/eslint-config/commit/7005333744bfba086a31cf441c27aa3b75496687)), closes [#15](https://github.com/nrccua/eslint-config/issues/15)
* [E4E-29]: 1.0.6 bump ([db6477f](https://github.com/nrccua/eslint-config/commit/db6477fe1ae63ad52f3847f3740fb65b075d25fd))

### [1.0.6](https://github.com/nrccua/eslint-config/compare/1.0.5...1.0.6) (2021-11-20)


### Changes

* [E4E-29]: Added rules around interface preference and naming ([cdb5e7f](https://github.com/nrccua/eslint-config/commit/cdb5e7f7addbcb8f1b5bc5b0c355232dca84d8a0))

### [1.0.5](https://github.com/nrccua/eslint-config/compare/1.0.4...1.0.5) (2021-11-19)


### Changes

* Update CHANGELOG + standard-version configuration

### [1.0.4](https://github.com/nrccua/eslint-config/compare/1.0.3...1.0.4) (2021-11-19)


### Changes

* Update README with better husky install info

### [1.0.3](https://github.com/nrccua/eslint-config/compare/1.0.2...1.0.3) (2021-11-18)


### Changes

* Fixed some README issues thanks to @partiga-daitan
* Add `collectCoverage: true` to jest.config.js

### [1.0.2](https://github.com/nrccua/eslint-config/compare/1.0.1...1.0.2) (2021-11-17)


### Changes

* Added some common react rules

### [1.0.1](https://github.com/nrccua/eslint-config/compare/1.0.0...1.0.1) (2021-11-17)


### Changes

* Added Jest docs to README and fixed other doc ref
* Made @actinc/eslint-config a full dependency so its tsconfig.json can be referenced
* Fixed tsconfig extends path for downstream users

### 1.0.0 - (2021-11-17)


### Changes

* Initial release
