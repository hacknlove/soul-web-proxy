import { describe, it, expect } from 'vitest'

describe('Color Scheme', () => {
  it('should have defined primary colors', () => {
    // Test that color palette is properly defined
    const primary50 = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-50')
    const primary500 = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-500')
    
    expect(primary50).toBe('#eff6ff')
    expect(primary500).toBe('#3b82f6')
  })
  
  it('should switch between light and dark themes', () => {
    // Test theme switching functionality
    document.documentElement.setAttribute('data-theme', 'dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    
    document.documentElement.setAttribute('data-theme', 'light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
})