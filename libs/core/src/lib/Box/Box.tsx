import styled from '@emotion/styled';
import {
  layout,
  borders,
  position,
  compose,
  background,
  color,
  colorStyle,
  opacity,
  space,
} from 'styled-system';
import {
  BackgroundProps,
  BordersProps,
  ColorProps,
  ColorStyleProps,
  FlexboxProps,
  LayoutProps,
  OpacityProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import { HTMLAttributes } from 'react';
import type * as CSS from 'csstype';
import { ThemeColor } from '@lookbook/shared/interfaces';

type BaseProps = HTMLAttributes<any>;

export interface BoxProps
  extends BaseProps,
    BordersProps,
    BackgroundProps,
    Omit<ColorProps, 'color' | 'backgroundColor'>,
    ColorStyleProps,
    FlexboxProps,
    LayoutProps,
    OpacityProps,
    PositionProps,
    SpaceProps {
  /**
   * The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.
   * ref: https://www.figma.com/file/70npQgiSeJNtmME5akU2zr/01_LDSG-v1.10-(Mobile)?node-id=2555%3A37615
   */
  color?: CSS.Property.Color | ThemeColor | string;
  /**
   * The background color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.
   * ref: https://www.figma.com/file/70npQgiSeJNtmME5akU2zr/01_LDSG-v1.10-(Mobile)?node-id=2555%3A37615
   */
  backgroundColor?: CSS.Property.Color | ThemeColor | string;
  /** Primary content */
  children?: React.ReactNode;
  /** Additional style */
  style?: React.CSSProperties;
  /** Additional classes */
  className?: string;
}

const boxStyles = compose(
  background,
  color,
  colorStyle,
  layout,
  opacity,
  position,
  space,
  borders
);

const Box = styled.div<BoxProps>({ boxSizing: 'border-box' }, boxStyles);

export default Box;
