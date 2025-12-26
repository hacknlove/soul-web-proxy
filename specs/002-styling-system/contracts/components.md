# Component Style Contracts

Date: 2025-12-26

## Button Component Specification

### Variants
- **Primary**: Main call-to-action buttons with solid background
- **Secondary**: Less prominent actions with border styling  
- **Outline**: Transparent background with colored border
- **Ghost**: Minimal styling, only text color changes

### Sizes
- **Small (sm)**: Compact padding, reduced text size
- **Medium (md)**: Default padding and text size
- **Large (lg)**: Generous padding, increased text size

### States
- **Default**: Normal appearance with hover effects
- **Hover**: Slightly darker/lighter background, cursor pointer
- **Focus**: Visible outline for keyboard navigation
- **Active**: Pressed appearance
- **Disabled**: Reduced opacity, no hover effects
- **Loading**: Spinner icon, disabled state

### Accessibility
- Minimum 44px touch target size
- High contrast colors (4.5:1 ratio minimum)
- Visible focus indicators
- ARIA labels for icon-only buttons

## Form Component Specification

### Input Fields
- **Text Input**: Border on focus, error state styling
- **Text Area**: Resizable, proper line height
- **Select**: Custom dropdown styling, keyboard navigation
- **Checkbox/ Radio**: Custom styled form controls
- **Error States**: Red border, error message display

### Validation States
- **Default**: Neutral border color
- **Error**: Red border, error text, icon indicator
- **Success**: Green border, success message
- **Warning**: Yellow border, warning message
- **Disabled**: Grayed out, no interaction

## Card Component Specification

### Variants
- **Default**: Subtle background, minimal shadow
- **Elevated**: Background with drop shadow
- **Outlined**: No background, border styling
- **Interactive**: Hover effects, clickable appearance

### Content Structure
- **Header**: Optional title area with consistent styling
- **Body**: Main content area with proper padding
- **Footer**: Optional action area or metadata
- **Image**: Responsive image handling with aspect ratios

## Navigation Component Specification

### Header Navigation
- **Logo Area**: Brand image/text with consistent sizing
- **Primary Menu**: Main navigation links
- **Secondary Menu**: User account, settings
- **Mobile Menu**: Hamburger menu for small screens
- **Search Bar**: Optional search functionality

### Mobile Navigation
- **Slide-out Menu**: Full-screen overlay on mobile
- **Touch Targets**: Minimum 44px tap targets
- **Gesture Support**: Swipe gestures for menu interactions
- **Focus Trap**: Focus management within menu

## Typography Specification

### Heading Scale
- **H1**: Page titles, largest size
- **H2**: Section titles
- **H3**: Subsection titles
- **H4**: Component headings
- **H5-H6**: Minor headings, content organization

### Text Styles
- **Body**: Default paragraph text
- **Small**: Metadata, captions
- **Large**: Emphasized text, lead paragraphs
- **Caption**: Image captions, form labels

### Responsive Text
- **Mobile**: Larger text sizes for readability
- **Tablet**: Balanced text sizes
- **Desktop**: Optimal reading sizes