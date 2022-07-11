const fontSizes = [10, 12, 14, 16, 20, 24, 32];

/**
 * LDSG layout foundation
 * Ref: https://www.figma.com/file/70npQgiSeJNtmME5akU2zr/01_LDSG-v1.10-(Mobile)?node-id=2536%3A37224
 */
const space = [0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56];

const grays = [
  '#FCFCFC', // 100
  '#F5F5F5', // 150
  '#EFEFEF', // 200
  '#DFDFDF', // 300
  '#C8C8C8', // 350
  '#B7B7B7', // 400
  '#949494', // 500
  '#777777', // 600
  '#555555', // 700
  '#303030', // 800
  '#111111', // 900
];

const limes = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#AFF299', // 300
  '#000000', // 350
  '#91ED72', // 400
  '#72DE54', // 500
  '#3CC926', // 600
  '#37AB27', // 700
  '#237A1F', // 800
  '#205416', // 900
  '#3aa12d', // P600
  '#59ba4a', // P500
  '#92cf8a', // P400
  '#bbd9b6', // P300
];

const lightGreens = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#93EDBF', // 300
  '#000000', // 350
  '#64E8A4', // 400
  '#35DB80', // 500
  '#15BD66', // 600
  '#18A352', // 700
  '#187A41', // 800
  '#16592D', // 900
  '#2a9c5b', // P600
  '#4bb875', // P500
  '#85c79b', // P400
  '#bad9c5', // P300
];

const teals = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#8EEDD9', // 300
  '#000000', // 350
  '#5CE5C8', // 400
  '#20D6BE', // 500
  '#19BFA1', // 600
  '#14A37B', // 700
  '#137856', // 800
  '#145E4E', // 900
  '#24967c', // P600
  '#46b897', // P500
  '#7cc9b0', // P400
  '#bad9cf', // P300
];

const cyans = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#8CEDED', // 300
  '#000000', // 350
  '#5BE3DE', // 400
  '#26D1D1', // 500
  '#1CB8B8', // 600
  '#10A1A1', // 700
  '#107575', // 800
  '#155C5C', // 900
  '#1f9399', // P600
  '#41b6b9', // P500
  '#7dcdcf', // P400
  '#bdd9d9', // P300
];

const lightBlues = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#90EAfc', // 300
  '#000000', // 350
  '#60def7', // 400
  '#40b6ff', // 500
  '#1a9cff', // 600
  '#0279d4', // 700
  '#095796', // 800
  '#1c476b', // 900
  '#268cad', // P600
  '#3fafc9', // P500
  '#7fc6d6', // P400
  '#c1d8de', // P300
];

const skyBlues = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#abdcff', // 300
  '#000000', // 350
  '#78cbff', // 400
  '#40b6ff', // 500
  '#1a9cff', // 600
  '#0279d4', // 700
  '#095796', // 800
  '#1c476b', // 900
  '#3f84c4', // P600
  '#5ba2db', // P500
  '#8fbee3', // P400
  '#c5d6e3', // P300
];

const blues = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#c2d2ff', // 300
  '#000000', // 350
  '#96b2ff', // 400
  '#6388FF', // 500
  '#4270ed', // 600
  '#2f59cc', // 700
  '#2d4796', // 800
  '#32457a', // 900
  '#4e73cc', // P600
  '#658ee1', // P500
  '#9fb6ec', // P400
  '#ccd3e5', // P300
];

const indigos = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#c2d2ff', // 300
  '#000000', // 350
  '#a2a2fc', // 400
  '#7979f7', // 500
  '#5f5fed', // 600
  '#4545d1', // 700
  '#3d389c', // 800
  '#383878', // 900
  '#5f5fba', // P600
  '#7979d9', // P500
  '#a6a6ed', // P400
  '#cfcfe5', // P300
];

const deepPurples = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#d4c4f5', // 300
  '#000000', // 350
  '#bd9ff5', // 400
  '#a17df5', // 500
  '#8556e3', // 600
  '#6b3cc9', // 700
  '#532f99', // 800
  '#47346b', // 900
  '#7956b0', // P600
  '#9473d6', // P500
  '#b59fe8', // P400
  '#d3cce5', // P300
];

const purples = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#edc8f7', // 300
  '#000000', // 350
  '#dd9cf7', // 400
  '#ce7af0', // 500
  '#c355d9', // 600
  '#af36c7', // 700
  '#762d85', // 800
  '#562e5e', // 900
  '#81529e', // P600
  '#a771c9', // P500
  '#c89be0', // P400
  '#dbcce3', // P300
];

const magentas = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#fccae7', // 300
  '#000000', // 350
  '#ff9ccd', // 400
  '#ff70b0', // 500
  '#f74397', // 600
  '#de2c7f', // 700
  '#bf0659', // 800
  '#8a0e46', // 900
  '#c74a82', // P600
  '#e569a0', // P500
  '#ed91bc', // P400
  '#ebccdd', // P300
];

const reds = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#fcc5cb', // 300
  '#000000', // 350
  '#ff96a3', // 400
  '#ff697a', // 500
  '#ff334b', // 600
  '#e5172f', // 700
  '#c9162b', // 800
  '#85101e', // 900
  '#d44652', // P600
  '#eb6570', // P500
  '#f68a94', // P400
  '#f2ced2', // P300
];

const oranges = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#ffcfbf', // 300
  '#000000', // 350
  '#ffa182', // 400
  '#ff875c', // 500
  '#ff6f36', // 600
  '#ff5e1f', // 700
  '#f24500', // 800
  '#c43100', // 900
  '#e35f42', // P600
  '#f5765d', // P500
  '#fa9e7f', // P400
  '#fad3c5', // P300
];

const ambers = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#fff9cc', // 300
  '#000000', // 350
  '#ffeb94', // 400
  '#ffd86b', // 500
  '#ffc53d', // 600
  '#fcb321', // 700
  '#fa9e1e', // 800
  '#f78411', // 900
  '#f7821b', // P600
  '#ffb55d', // P500
  '#ffdd80', // P400
  '#ffe8c2', // P300
];

const yellows = [
  '#000000', // 100
  '#000000', // 150
  '#000000', // 200
  '#fdffe5', // 300
  '#000000', // 350
  '#fbffbf', // 400
  '#fdff78', // 500
  '#fffc33', // 600
  '#fff200', // 700
  '#ffe500', // 800
  '#ffd900', // 900
  '#ffdf6b', // P600
  '#ffea80', // P500
  '#ffea80', // P400
  '#fcfad2', // P300
];

/**
 * LDSG color foundation
 * How to use it?
 * colors.['colorName'][0] : 100
 * colors.['colorName'][1] : 150
 * colors.['colorName'][2] : 200
 * colors.['colorName'][3] : 300
 * colors.['colorName'][4] : 350
 * colors.['colorName'][5] : 400
 * colors.['colorName'][6] : 500
 * colors.['colorName'][7] : 600
 * colors.['colorName'][8] : 700
 * colors.['colorName'][9] : 800
 * colors.['colorName'][10] : 900
 * Ref: https://www.figma.com/file/70npQgiSeJNtmME5akU2zr/01_LDSG-v1.10-(Mobile)?node-id=2555%3A37615
 */
export const colors = {
  // LDSG Theme Colors
  primary: '#06C755',
  primaryAlt: '#18A352',
  secondary: '#707991',
  secondaryAlt: '#32457A',
  positive: '#3CC926',
  negative: '#FF334B',
  link: '#4270ED',
  disabled: '#E4E4E4',
  onSurface: '#FFFFFF',
  onSurfaceAlt: '#000000',
  white: '#FFFFFF',
  black: '#000000',
  lineBlue: '#4771FF',
  lineGreen: '#06C755',
  lineNavy: '#707991',
  // Rainbow Colors
  grays,
  gray100: grays[0],
  gray150: grays[1],
  gray200: grays[2],
  gray300: grays[3],
  gray350: grays[4],
  gray400: grays[5],
  gray500: grays[6],
  gray600: grays[7],
  gray700: grays[8],
  gray800: grays[9],
  gray900: grays[10],
  limes,
  lime100: limes[0],
  lime150: limes[1],
  lime200: limes[2],
  lime300: limes[3],
  lime350: limes[4],
  lime400: limes[5],
  lime500: limes[6],
  lime600: limes[7],
  lime700: limes[8],
  lime800: limes[9],
  lime900: limes[10],
  limeP600: limes[11],
  limeP500: limes[12],
  limeP400: limes[13],
  limeP300: limes[14],
  lightGreens,
  lightGreen100: lightGreens[0],
  lightGreen150: lightGreens[1],
  lightGreen200: lightGreens[2],
  lightGreen300: lightGreens[3],
  lightGreen350: lightGreens[4],
  lightGreen400: lightGreens[5],
  lightGreen500: lightGreens[6],
  lightGreen600: lightGreens[7],
  lightGreen700: lightGreens[8],
  lightGreen800: lightGreens[9],
  lightGreen900: lightGreens[10],
  lightGreenP600: lightGreens[11],
  lightGreenP500: lightGreens[12],
  lightGreenP400: lightGreens[13],
  lightGreenP300: lightGreens[14],
  teals,
  teal100: teals[0],
  teal150: teals[1],
  teal200: teals[2],
  teal300: teals[3],
  teal350: teals[4],
  teal400: teals[5],
  teal500: teals[6],
  teal600: teals[7],
  teal700: teals[8],
  teal800: teals[9],
  teal900: teals[10],
  tealP600: teals[11],
  tealP500: teals[12],
  tealP400: teals[13],
  tealP300: teals[14],
  cyans,
  cyan100: cyans[0],
  cyan150: cyans[1],
  cyan200: cyans[2],
  cyan300: cyans[3],
  cyan350: cyans[4],
  cyan400: cyans[5],
  cyan500: cyans[6],
  cyan600: cyans[7],
  cyan700: cyans[8],
  cyan800: cyans[9],
  cyan900: cyans[10],
  cyanP600: cyans[11],
  cyanP500: cyans[12],
  cyanP400: cyans[13],
  cyanP300: cyans[14],
  lightBlues,
  lightBlue100: lightBlues[0],
  lightBlue150: lightBlues[1],
  lightBlue200: lightBlues[2],
  lightBlue300: lightBlues[3],
  lightBlue350: lightBlues[4],
  lightBlue400: lightBlues[5],
  lightBlue500: lightBlues[6],
  lightBlue600: lightBlues[7],
  lightBlue700: lightBlues[8],
  lightBlue800: lightBlues[9],
  lightBlue900: lightBlues[10],
  lightBlueP600: lightBlues[11],
  lightBlueP500: lightBlues[12],
  lightBlueP400: lightBlues[13],
  lightBlueP300: lightBlues[14],
  skyBlues,
  skyBlue100: skyBlues[0],
  skyBlue150: skyBlues[1],
  skyBlue200: skyBlues[2],
  skyBlue300: skyBlues[3],
  skyBlue350: skyBlues[4],
  skyBlue400: skyBlues[5],
  skyBlue500: skyBlues[6],
  skyBlue600: skyBlues[7],
  skyBlue700: skyBlues[8],
  skyBlue800: skyBlues[9],
  skyBlue900: skyBlues[10],
  skyBlueP600: skyBlues[11],
  skyBlueP500: skyBlues[12],
  skyBlueP400: skyBlues[13],
  skyBlueP300: skyBlues[14],
  blues,
  blue100: blues[0],
  blue150: blues[1],
  blue200: blues[2],
  blue300: blues[3],
  blue350: blues[4],
  blue400: blues[5],
  blue500: blues[6],
  blue600: blues[7],
  blue700: blues[8],
  blue800: blues[9],
  blue900: blues[10],
  blueP600: blues[11],
  blueP500: blues[12],
  blueP400: blues[13],
  blueP300: blues[14],
  indigos,
  indigo100: indigos[0],
  indigo150: indigos[1],
  indigo200: indigos[2],
  indigo300: indigos[3],
  indigo350: indigos[4],
  indigo400: indigos[5],
  indigo500: indigos[6],
  indigo600: indigos[7],
  indigo700: indigos[8],
  indigo800: indigos[9],
  indigo900: indigos[10],
  indigoP600: indigos[11],
  indigoP500: indigos[12],
  indigoP400: indigos[13],
  indigoP300: indigos[14],
  deepPurples,
  deepPurple100: deepPurples[0],
  deepPurple150: deepPurples[1],
  deepPurple200: deepPurples[2],
  deepPurple300: deepPurples[3],
  deepPurple350: deepPurples[4],
  deepPurple400: deepPurples[5],
  deepPurple500: deepPurples[6],
  deepPurple600: deepPurples[7],
  deepPurple700: deepPurples[8],
  deepPurple800: deepPurples[9],
  deepPurple900: deepPurples[10],
  deepPurpleP600: deepPurples[11],
  deepPurpleP500: deepPurples[12],
  deepPurpleP400: deepPurples[13],
  deepPurpleP300: deepPurples[14],
  purples,
  purple100: purples[0],
  purple150: purples[1],
  purple200: purples[2],
  purple300: purples[3],
  purple350: purples[4],
  purple400: purples[5],
  purple500: purples[6],
  purple600: purples[7],
  purple700: purples[8],
  purple800: purples[9],
  purple900: purples[10],
  purpleP600: purples[11],
  purpleP500: purples[12],
  purpleP400: purples[13],
  purpleP300: purples[14],
  magentas,
  magenta100: magentas[0],
  magenta150: magentas[1],
  magenta200: magentas[2],
  magenta300: magentas[3],
  magenta350: magentas[4],
  magenta400: magentas[5],
  magenta500: magentas[6],
  magenta600: magentas[7],
  magenta700: magentas[8],
  magenta800: magentas[9],
  magenta900: magentas[10],
  magentaP600: magentas[11],
  magentaP500: magentas[12],
  magentaP400: magentas[13],
  magentaP300: magentas[14],
  reds,
  red100: reds[0],
  red150: reds[1],
  red200: reds[2],
  red300: reds[3],
  red350: reds[4],
  red400: reds[5],
  red500: reds[6],
  red600: reds[7],
  red700: reds[8],
  red800: reds[9],
  red900: reds[10],
  redP600: reds[11],
  redP500: reds[12],
  redP400: reds[13],
  redP300: reds[14],
  oranges,
  orange100: oranges[0],
  orange150: oranges[1],
  orange200: oranges[2],
  orange300: oranges[3],
  orange350: oranges[4],
  orange400: oranges[5],
  orange500: oranges[6],
  orange600: oranges[7],
  orange700: oranges[8],
  orange800: oranges[9],
  orange900: oranges[10],
  orangeP600: oranges[11],
  orangeP500: oranges[12],
  orangeP400: oranges[13],
  orangeP300: oranges[14],
  ambers,
  amber100: ambers[0],
  amber150: ambers[1],
  amber200: ambers[2],
  amber300: ambers[3],
  amber350: ambers[4],
  amber400: ambers[5],
  amber500: ambers[6],
  amber600: ambers[7],
  amber700: ambers[8],
  amber800: ambers[9],
  amber900: ambers[10],
  amberP600: ambers[11],
  amberP500: ambers[12],
  amberP400: ambers[13],
  amberP300: ambers[14],
  yellows,
  yellow100: yellows[0],
  yellow150: yellows[1],
  yellow200: yellows[2],
  yellow300: yellows[3],
  yellow350: yellows[4],
  yellow400: yellows[5],
  yellow500: yellows[6],
  yellow600: yellows[7],
  yellow700: yellows[8],
  yellow800: yellows[9],
  yellow900: yellows[10],
  yellowP600: yellows[11],
  yellowP500: yellows[12],
  yellowP400: yellows[13],
  yellowP300: yellows[14],
};

export type LookBookThemeColor = keyof typeof colors;

const primary = {
  fontSizes,
  space,
  colors: { ...colors },
};

export default primary;
