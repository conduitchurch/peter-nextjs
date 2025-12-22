const DefaultPalette = (mode) => {
  const lightColor = "31, 27, 32";
  const darkColor = "246, 245, 241";
  const mainColor = mode === "light" ? lightColor : darkColor;

  return {
    customColors: {
      main: `rgba(${mainColor}, 1)`,
      primaryGradient: "#012160",
      tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759",
    },
    common: {
      black: "#000",
      white: "#FFF",
    },
    mode,
    primary: {
      light: "#168aad", //
      main: "#168aad", //
      dark: "#168aad", //
      contrastText: "#fff",
    },
    secondary: {
      light: "#76c893", //
      main: "#76c893", //
      dark: "#76c893", //
      contrastText: "#000",
    },
    info: {
      light: "#0c63e7", //
      main: "#0c63e7", //
      dark: "#0c63e7", //
      contrastText: "#fff",
    },
    success: {
      light: "#137547", //
      main: "#137547", // Darmouth Green
      dark: "#137547", //
      contrastText: "#000",
    },
    attention: {
      light: "#76c893", //
      main: "#76c893", // Canary
      dark: "#76c893", //
      contrastText: "#000",
    },
    warning: {
      light: "#168aad", //
      main: "#168aad", // Fulvous
      dark: "#168aad", //
      contrastText: "#000",
    },
    error: {
      light: "#0c63e7", // Chili Red
      main: "#0c63e7", // Rufous
      dark: "#0c63e7", // Barn Red
      contrastText: "#000",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      250: "#E8E8E8",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#616161",
      A700: "#303030",
      light: "#D5D5D5",
      main: "#AAAAAA",
      dark: "#616161",
      contrastText: "#000",
    },
    bright: {
      light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#FFFFFF",
      contrastText: "#000",
    },
    text: {
      primary: `rgba(${mainColor}, 0.85)`,
      secondary: `rgba(${mainColor}, 0.74)`,
      disabled: `rgba(${mainColor}, 0.57)`,
      lightPrimary: `rgba(${lightColor}, 0.85)`,
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === "light" ? "#ffffff" : "#1f1b20",
      default: mode === "light" ? "#f8f8f8" : "#000000",
      light: {
        paper: "#ffffff",
        default: "#e8e8e8",
      },
      dark: {
        paper: "#1f1b20",
        default: "#000000",
      },
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.04)`,
      selected: `rgba(${mainColor}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.30)`,
      disabledBackground: `rgba(${mainColor}, 0.18)`,
      focus: `rgba(${mainColor}, 0.12)`,
    },
  };
};

export default DefaultPalette;