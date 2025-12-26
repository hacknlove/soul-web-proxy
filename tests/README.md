# Unit Tests

Unit tests are located in `tests/unit/` and use Vitest.

## Running Tests

```bash
# Run all unit tests
npm run test:unit

# Run in watch mode
npm run test:unit -- --watch

# Run with coverage
npm run test:unit -- --coverage
```

## Test Conventions

- File names should end with `.test.js`
- Use `describe()` to group related tests
- Use `it()` or `test()` for individual test cases
- Use `expect()` for assertions
- Follow TDD principles: write failing tests first

## Example Test Structure

```javascript
import { describe, it, expect } from 'vitest'

describe('Feature name', () => {
  it('should do something', () => {
    expect(result).toBe(expected)
  })
})
```

## Environment

- Tests run in jsdom environment
- DOM APIs are available
- Jest-compatible matchers are supported