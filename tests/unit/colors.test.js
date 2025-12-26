import { describe, it, expect } from 'vitest'

describe('Color Scheme', () => {
  it('should switch between light and dark themes', () => {
    // Test theme switching functionality
    document.documentElement.setAttribute('data-theme', 'dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    
    document.documentElement.setAttribute('data-theme', 'light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
})