import * as React from 'react';
import { colors } from '@lookbook/shared/emotion';

export interface StandardProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface WithAsProps<
  As extends React.ElementType | string = React.ElementType
> extends StandardProps {
  /** You can use a custom element for this component */
  as?: As;
}

export type MergeElementProps<
  T extends React.ElementType = React.ElementType,
  P extends object = Record<string, unknown>
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;

export type HorizontalPosition = 'top' | 'bottom';
export type VerticalPosition = 'left' | 'right';
export type Size = 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS' | 'XXS';
export type FontSize = Size;
export type FontWeight = 'regular' | 'bold' | 'heavy';
export type ThemeColor = keyof typeof colors;
export type LDSGThemeColor =
  | 'primary'
  | 'primaryAlt'
  | 'secondary'
  | 'secondaryAlt'
  | 'positive'
  | 'negative'
  | 'link'
  | 'disabled'
  | 'onSurface'
  | 'onSurfaceAlt'
  | 'white'
  | 'black'
  | 'lineBlue'
  | 'lineGreen'
  | 'lineNavy';
export type RainbowThemeColor = Exclude<keyof typeof colors, LDSGThemeColor>;
export type Appearance = 'contained' | 'outlined' | 'ghost';
export type Position4 = HorizontalPosition | VerticalPosition;
export type Position6 = `${HorizontalPosition}-${VerticalPosition}`;
export type Position = Position4 | Position6;
