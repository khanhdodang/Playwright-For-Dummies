# Contributing

## Choose an issue

Playwright **requires an issue** for every contribution, except for minor documentation updates. We strongly recommend picking an issue labeled `open-to-a-pull-request` for your first contribution to the project.

If you are passionate about a bug/feature, but cannot find an issue describing it, **file an issue first**. This will facilitate the discussion and you might get some early feedback from project maintainers before spending your time on creating a pull request.

## Make a change

Make sure you're running Node.js 20 or later.
```bash
node --version
```

Clone the repository. If you plan to send a pull request, it might be better to [fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) first.
```bash
git clone https://github.com/khanhdodang/Playwright-For-Dummies
cd Playwright-For-Dummies
```

Install dependencies and run the build in watch mode.
```bash
npm install
npm run test
```

The coding style is fully defined in [.eslintrc](https://github.com/microsoft/playwright/blob/main/.eslintrc.js). Before creating a pull request, or at any moment during development, run linter to check all kinds of things:
  ```bash
  npm run lint
  ```

Comments should be avoided generally. If the code would not be understood without comments, consider rewriting it to be self-explanatory.

## Write a commit message

Commit messages should follow the [Semantic Commit Messages](https://www.conventionalcommits.org/en/v1.0.0/) format:

```
label(namespace): title

description

footer
```

1. *label* is one of the following:
    - `fix` - bug fixes
    - `feat` - new features
    - `docs` - documentation-only changes
    - `test` - test-only changes
    - `devops` - changes to the CI or build
    - `chore` - everything that doesn't fall under previous categories
1. *namespace* is put in parenthesis after label and is optional. Must be lowercase.
1. *title* is a brief summary of changes.
1. *description* is **optional**, new-line separated from title and is in present tense.
1. *footer* is **optional**, new-line separated from *description* and contains "fixes" / "references" attribution to github issues.

Example:

```
feat(trace viewer): network panel filtering

This patch adds a filtering toolbar to the network panel.
<link to a screenshot>

Fixes #123, references #234.
```

## Send a pull request

All submissions, including submissions by project members, require review. We use GitHub pull requests for this purpose. Consult [GitHub Help](https://help.github.com/articles/about-pull-requests/) for more information on using pull requests.

After a successful code review, one of the maintainers will merge your pull request. Congratulations!

## More details

**No new dependencies**

There is a very high bar for new dependencies, including updating to a new version of an existing dependency. We recommend to explicitly discuss this in an issue and get a green light from a maintainer, before creating a pull request that updates dependencies.


## Contributor License Agreement

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

### Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [khanhdo.pmp@gmail.com](mailto:khanhdo.pmp@gmail.com) with any additional questions or comments.
