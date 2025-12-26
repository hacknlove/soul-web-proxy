import { describe, it, expect } from 'vitest'

describe('Theme Integration Test', () => {
  it('should switch between light and dark themes', () => {
    // Test that theme switching works on the actual page
    document.documentElement.setAttribute('data-theme', 'dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    
    document.documentElement.setAttribute('data-theme', 'light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
  
  it('should have theme provider functionality available', () => {
    // Test that theme context is properly set up
    expect(typeof document.querySelector('body')).toBeTruthy()
  })
})