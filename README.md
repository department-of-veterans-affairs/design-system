# Formation (VA design system)

Legacy URL: https://department-of-veterans-affairs.github.io/design-system
Work in progress URL: https://department-of-veterans-affairs.github.io/vets-design-system-documentation/

This repo contains styles and assets for the VA design system, as well as React implementations of some of the patterns.

**Start here:**

- You need Homebrew. To install Homebrew, [follow these instructions](https://www.howtogeek.com/211541/homebrew-for-os-x-easily-installs-desktop-apps-and-terminal-utilities/)
- You also need Yarn. To install Yarn, you'll use Homebrew. In Terminal, run `brew install yarn`

**Clone the design-system repo:**

If you're familiar with cloning repos from Github using Terminal, skip ahead to **Install Fractal**.

You can put the repo anywhere on your computer, but as a suggestion:
- In Terminal, navigate to your desktop: `cd ~/desktop`
- Clone the Github repo by running: `git clone https://github.com/department-of-veterans-affairs/design-system.git`
- Then: `cd design-system`

## Previewing Changes

As you make changes to these modules, you'll likely want to see how your changes look in a consuming app, such as the `vets-website` app. [Check out these instructions on how to do so](./previewing-changes.md).

## Publishing Module to NPM

After you've tested and previewed your changes locally it's time to publish a new version of the package to NPM.

> Prerequisite: you must be [registered](https://docs.npmjs.com/getting-started/publishing-npm-packages) with NPM, be a member of the "department-of-veterans-affairs" organization, and have the appropriate organization role to publish an update to the module. Verify that you are logged in correctly by running `npm whoami`. If you are unable to publish an update, confirm you are a member of the "department-of-veterans-affairs" organization by going to your Profile page on [npmjs.com](https://www.npmjs.com).

### 1. Submit your PR

Submit a PR that includes all of your code changes, without the version bump, and merge into `master` when approved.

### 2. Merge your PR to master

Once your changes are approved, merge them to master. Releases should not necessarily happen after every PR is merged, it's up to you and the needs of the consuming applications.

### 3. Build and publish

* Run `npm run build`
* After the build succeeds, run `npx lerna publish`

You'll be asked to choose what version to update:

- `patch` - for bug fixes and minor changes
- `minor` - for new features that don't break current features or require changes in consuming applications
- `major` - for backwards breaking changes

You'll also be asked with packages you want to update. Our modules are versioned independently, so you'll need to update their verisons depending on where you made changes.

> If you are unsure of what to pick, do a major version update on both modules.

### 4. Update consuming apps

The last step is to update the `package.json` files of consuming apps to use the latest version of `@department-of-veterans-affairs/formation` (or `formation-react`). For example, if you are working with the `vets-website` project, open the `vets-website`'s `package.json` to update the version number of the `@department-of-veterans-affairs/formation` entry listed in the `dependencies` section. The version number should match what you just published to NPM.

## Choosing a design system for Vets.gov

This has been migrated to [another file](research.md) in order to keep the README instructional.
