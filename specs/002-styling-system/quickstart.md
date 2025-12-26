# Quickstart: Styling System

Date: 2025-12-26

## Goals

- Establish consistent visual design system using Tailwind CSS
- Implement responsive design for all devices
- Provide accessible components following WCAG guidelines
- Support light/dark theme switching
- Enable rapid development with reusable components

## Prerequisites

- Node.js (LTS)
- Astro 5.x project

## Setup Process

### 1. Install Tailwind CSS

```bash
# Add Tailwind to Astro project
npx astro add tailwind

# Install additional dependencies
npm install @astrojs/icon lucide-react
```

### 2. Configure Tailwind

```javascript
// tailwind.config.js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

### 3. Create Base Styles

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom CSS variables for theming */
:root {
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
}

[data-theme="dark"] {
  --color-primary-50: #1e3a8a;
  --color-primary-500: #3b82f6;
  --color-primary-900: #eff6ff;
}
```

### 4. Create Theme Provider

```javascript
// src/components/theme/provider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Component Usage

### Button Component

```javascript
// src/components/ui/Button.jsx
export function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600',
    secondary: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-50'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

## Responsive Design

### Mobile-First Approach

```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Responsive column layout */}
</div>

<div className="text-sm md:text-base lg:text-lg">
  {/* Responsive typography */}
</div>
```

### Breakpoint Usage

- **sm**: 640px (large phones, small tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (small desktops, large tablets)
- **xl**: 1280px (desktops)
- **2xl**: 1536px (large desktops)

## Theme Integration

### Dark Mode Toggle

```javascript
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

## Accessibility Implementation

### Focus Management

```jsx
<button className="focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
  Accessible button with visible focus ring
</button>
```

### ARIA Labels

```jsx
<button aria-label="Close dialog" className="p-2">
  <Icon name="x" />
</button>
```

## Development Workflow

### 1. Create Components
- Use utility classes for styling
- Create reusable component files in `src/components/ui/`
- Include variants for different states and sizes

### 2. Test Responsiveness
- Use browser dev tools to test at different screen sizes
- Verify mobile experience is fully functional
- Test keyboard navigation and screen readers

### 3. Validate Accessibility
- Check color contrast ratios (minimum 4.5:1)
- Test with keyboard only navigation
- Verify screen reader compatibility

## Expected Outcomes

- Consistent visual design across all pages
- Responsive layouts that work on all devices
- Accessible components that meet WCAG 2.1 AA standards
- Smooth theme switching between light and dark modes
- Rapid development with reusable component patterns