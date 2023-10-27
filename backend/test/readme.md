Put your additional test files to this separate test folder to avoid confusion.

Place Your Test Files Next to The Implementation
Tests are not just for checking whether a module produces the expected output, they also document your modules.
Because of this, it is easier to understand if test files are placed next to the implementation.

├── test
| └── setup.spec.js
├── product
| ├── index.js
| ├── product.js
| ├── product.spec.js
| └── product.hbs
├── user
| ├── index.js
| ├── user.js
| ├── user.spec.js
| └── user.hbs
