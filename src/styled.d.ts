import 'styled-components';
import type { ThemeConfig } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeConfig {}
}