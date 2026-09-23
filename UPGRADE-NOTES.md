# Breaking changes and compatibility



### MarkdownLint tooling

The CLI upgrade crosses a pre-1.0 minor boundary and must be treated as a
potentially breaking tooling upgrade:

- Node 20 support is removed; the CLI now requires Node 22 or newer. This
repository uses Node 24 in `.nvmrc` and CI.
- MarkdownLint 0.41 removes handling of inline directive syntax and revises
several checks, including MD022, MD028, MD035, MD042, MD051, and MD060.
Existing Markdown can receive different diagnostics. Run the Markdown check
before committing documentation changes.
- The CLI's YAML parser moves from js-yaml 4 to 5. The shared MarkdownLint config
is JSON and needs no migration. Projects with custom YAML/TOML CLI config
should rerun their own Markdown checks rather than importing the CLI's
transitive parsers as application dependencies.

The repository's existing Markdown passes with the new CLI. No shared Markdown
rules were disabled to accommodate the update. `markdownlint-cli` is a development
dependency here and is not installed for consumers by the published package.

See the [MarkdownLint CLI release notes](https://github.com/igorshubovych/markdownlint-cli/releases/tag/v0.49.0).

### ESLint and Storybook

- ESLint remains on major version 10 (development version 10.11.0). Existing
v4 flat-config factory calls and consumer rule overrides are preserved.
- Storybook and its ESLint plugin move together to 10.6.0. The original shared
Storybook preset still loads; the included story examples pass lint. This
repository does not exercise an entire Storybook application build.
- esbuild moves across a pre-1.0 minor boundary to 0.28.2. Storybook 10.6.0
declares support for that version range. This package does not expose an
esbuild API. Consumers using esbuild directly should validate their own builds.

The [esbuild advisory](https://github.com/advisories/GHSA-g7r4-m6w7-qqqr) describes the fixed Windows server issue.

### Preserving original plugins

The published artifact bundles the five original legacy ESLint packages and
their locked production dependencies. The build changes only the peer metadata
needed for ESLint 10 and React Hooks 7 compatibility. Existing `@eslint/compat`
adapters handle legacy rule APIs; no plugin implementation files are edited.

Bundling is applied only to the generated package. Putting `bundleDependencies`
in the development manifest caused `npm ci` peer resolution failures. The
package build includes all required transitive dependencies and licenses.

Bundled dependency updates require a new build and release. Tests compare their
implementation files and full rule inventories against the installed originals,
then exercise consumer overrides and clean installation with strict peers.

## Consumer migration

After the updated package is published:

1. Install the new config release alongside ESLint 10.
2. Keep the existing v4 `eslint.config.js` factory call and rule overrides.
3. Refresh the consumer lockfile, run its own audit, and apply compatible fixes.
4. Run the consumer's lint, type checks, tests, and build.

An existing consumer lockfile can retain older non-bundled transitive versions.
The repository's root overrides and audit result do not replace consumer checks.
No additional public API migration is required by this security update beyond
v4's existing ESLint 10 flat-config requirements.

## Validation

Use Node 24 and run:

```sh
npm ci --ignore-scripts
AUDIT_PACKED_PACKAGE=1 npm test
npm run build
```

