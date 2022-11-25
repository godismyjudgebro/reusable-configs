# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## 1.8.0 — 2022-11-25

### Removed

- Disabled rule `jsdoc/require-description-complete-sentence`.

---

## 1.7.0 — 2022-11-22

### Changed

- Changed rule `@typescript-eslint/naming-convention` to require `_` prefix for private/protected properties.
- Changed ESLint rule `no-underscore-dangle` to `allowAfterThis: true`.

---

## 1.6.0 — 2022-11-18

### Removed

- Removed ESLint rule `no-continue`.
- Removed rule `@typescript-eslint/no-non-null-assertion`

---

## 1.5.0 — 2022-11-12

### Changed

- Changed comment pattern for `@ts-ignore` comments.

---

## 1.4.0 — 2022-11-11

### Changed

- `id-match` now matches StrictPascalCase and strictCamelCase. Continues to only allow digits last in the name.

### Removed

- Removed `no-underscore-dangle` rule (use `id-match` or `@typescript-eslint/naming-convention` instead).
- Removed `id-match` rule for TypeScript files (use `@typescript-eslint/naming-convention` instead).

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

### Fixed

- Fixed installation instructions in [README.md](./README.md).
