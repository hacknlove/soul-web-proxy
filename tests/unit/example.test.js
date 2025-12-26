import { describe, it, expect } from 'vitest'

describe('Example unit test', () => {
  it('should demonstrate basic assertions', () => {
    expect(2 + 2).toBe(4)
    expect('hello').toContain('ell')
    expect([1, 2, 3]).toHaveLength(3)
  })
  
  it('should demonstrate async testing', async () => {
    const result = await Promise.resolve('async result')
    expect(result).toBe('async result')
  })
})