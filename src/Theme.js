import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";

export default createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  },
  overrides: {
    MuiListItem: {
      root: {
        color: '#008080',
      },
    }
  }
});
