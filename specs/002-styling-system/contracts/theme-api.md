# API Contracts: Styling System

Date: 2025-12-26

## Theme Management API

### Get Current Theme

```http
GET /api/theme
```

**Response**:
```json
{
  "theme": "light" | "dark",
  "preferences": {
    "highContrast": boolean,
    "reducedMotion": boolean,
    "fontSize": "small" | "medium" | "large"
  }
}
```

### Set Theme

```http
POST /api/theme
Content-Type: application/json
```

**Request**:
```json
{
  "theme": "light" | "dark",
  "preferences": {
    "highContrast": boolean,
    "reducedMotion": boolean,
    "fontSize": "small" | "medium" | "large"
  }
}
```

**Response**:
```json
{
  "success": true,
  "theme": "light" | "dark"
}
```

## Component Style Contracts

### Button Component

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
}
```

**Classes Applied**:
- `variant-primary`: Primary button styling with background color
- `variant-secondary`: Secondary styling with border
- `size-sm`: Small padding and text size
- `disabled`: Reduced opacity, no hover effects
- `loading`: Spinner icon, disabled state

### Card Component

```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}
```

**Classes Applied**:
- `variant-default`: Subtle background, minimal shadow
- `variant-elevated`: Background with shadow effect
- `padding-sm`: Small internal spacing
- `padding-lg`: Large internal spacing

## Responsive Breakpoint Contracts

### Breakpoint Definitions

```css
/* Mobile-first breakpoints */
sm: 640px   /* Small tablets and large phones */
md: 768px   /* Tablets */
lg: 1024px  /* Small desktops and large tablets */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Usage Classes

- `sm:`, `md:`, `lg:`, `xl:`, `2xl:` prefixes for responsive utilities
- `max-sm:`, `max-md:` for maximum width breakpoints
- Responsive utilities follow mobile-first approach

## Color System Contracts

### Design Token Structure

```css
:root {
  /* Primary colors */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
  
  /* Neutral colors */
  --color-gray-50: #f9fafb;
  --color-gray-500: #6b7280;
  --color-gray-900: #111827;
  
  /* Semantic colors */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}
```

### Dark Mode Overrides

```css
[data-theme="dark"] {
  --color-primary-50: #1e3a8a;
  --color-primary-500: #3b82f6;
  --color-primary-900: #eff6ff;
  /* ... other dark mode color adjustments */
}
```

## Accessibility Contracts

### Focus Management

```css
.focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

### ARIA Requirements

- All interactive elements MUST have appropriate `aria-label` or `aria-labelledby`
- Form inputs MUST have associated `aria-describedby` for error messages
- Navigation MUST support keyboard `tab` navigation
- Dynamic content changes MUST be announced to screen readers