# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 1.3.0 — 2022-11-11

### Changed

- Disabled option `checkGetters` for rule `jsdoc/require-returns`.

---

## 1.2.0 — 2022-11-08

### Added

- Added a changelog.

### Changed

- Disabled options `forceRequireReturn` and `forceReturnsWithAsync` for rule `jsdoc/require-returns`.

---

## 1.1.0 — 2022-11-05

### Changed

- Changed the ESLint [`no-void`] rule for TypeScript files to ignore `void`
  statements. This allows `void someAsyncFunction()`.  
  See: [`typescript-eslint/no-floating-promises`].

[`no-void`]: https://eslint.org/docs/rules/no-void
[`typescript-eslint/no-floating-promises`]: https://typescript-eslint.io/rules/no-floating-promises/

---

## 1.0.1 — 2022-11-04

### Changed

- Fixed installation instructions in [README.md](./README.md).
