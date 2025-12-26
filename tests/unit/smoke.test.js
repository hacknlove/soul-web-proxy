import { describe, it, expect } from 'vitest'

describe('Unit smoke test', () => {
  it('should pass a basic test', () => {
    expect(true).toBe(true)
  })
  
  it('should have test environment working', () => {
    expect(typeof document).toBe('object')
  })
})