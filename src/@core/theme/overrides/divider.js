const Divider = (theme) => ({
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: `${theme.spacing(2)} 0`,
        fontSize: "10pt",
        color: theme.palette.text.disabled,
        '&::before': {
          width: '100%'
        },
        '&::after': {
          width: '0%'
        }
      },
    },
  },
});

export default Divider;
