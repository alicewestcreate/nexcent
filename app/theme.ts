export const customTheme = {
  colors: {
    primary: '#43A046', //'#28CB8B',
    secondary: '#263238',
    info: '#2194f3',
    neutrals: {
      black: '#263238',
      darkGrey:'#4D4D4D',
      grey: '#717171',
      lightGrey: '#89939E',
      greyBlue: '#ABBED1',
      silver: '#F5F7FA',
      white: '#FFFFFF',
    },
    shades: {
      s1: '#43A046',
      s2: '#388E3B',
      s3: '#237D31',
      s4: '#1B5E1F',
      s5: '#103E13',
    },
    tints: {
      t1: '#66BB69',
      t2: '#81C784',
      t3: '#A5D6A7',
      t4: '#C8E6C9',
      t5: '#E8F5E9',
    },
    action :{
      warning: '#FBC02D',
      error: '#E53835',
      succcess: '#2E7D31',
    },
    
  },
  font: {
    size: {
      h1: 64,
      h2: 36,
      h3: 28,
      h4: 20,
      body1: 18,
      body2: 16,
      body3: 14,
      body4: 12,
    },
    lineHeight: {
      h1: 76,
      h2: 44,
      h3: 36,
      h4: 28,
      body1: 28,
      body2: 24,
      body3: 16,
      body4: 16,
    },
    weight: {
      regular: '300', // Design does not reflex true weight styling
      medium: '500',
      semiBold: '600',

    }
  },
  spacing: {
    // Base Spacing
    baseSpacing: {
      xs: 4,    // 4px
      s: 8,     // 8px
      sm: 12,
      m: 16,    // 16px
      l: 24,    // 24px
      xl: 32    // 32px
    },
  
    // Advanced Spacing
    advancedSpacing: {
      xxs: 2,   // 2px
      xxl: 48,  // 48px
      container: 1200,  // 1200px (container width)
      gutter: 16        // 16px (for grid gutters)
    },
  
    // Element Spacing
    elementSpacing: {
      icon: 8,       // 8px
      button: 8,     // 8px (around buttons)
      input: 8,      // 8px (around input fields)
      formField: 16  // 16px (between form fields)
    },
  
    // Layout Spacing
    layoutSpacing: {
      section: 48,   // 48px (for section margins/padding)
      block: 32,     // 32px (spacing between blocks or major content areas)
      component: null  // Varies (depending on the component)
    },
  
    // Responsive Spacing
    responsiveSpacing: {
      mobile: null,      // Varies (use smaller values for mobile)
      tablet: null,      // Varies (larger than mobile but smaller than desktop)
      desktop: null,     // Varies (larger than mobile and tablet)
      largeScreen: null  // Varies (for larger screens)
    },
  
    // Custom Spacing
    customSpacing: {
      hero: 64,      // 64px (for hero sections)
      footer: 32,    // 32px (for footer spacing)
      sidebar: 16    // 16px (for spacing around sidebar components)
    },
  
    // Negative Spacing
    negativeSpacing: {
      negative: -8  // -8px (for overlapping or layering elements)
    }
  }
  
};

export type CustomTheme = typeof customTheme;

export type ThemeFont = typeof customTheme.font;
export type ThemeFontSizes = typeof customTheme.font.size;
export type ThemeColors = typeof customTheme.colors;
export type ThemeSpace = typeof customTheme.spacing;



