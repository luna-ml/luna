import { createMuiTheme } from '@material-ui/core/styles';
const DEV_MODE = (process.env.NODE_ENV === "development")

const baseApiUrl = DEV_MODE
  ? "http://localhost:5000"
  : window.location.href.replace(/\/$/, "") // something like https://domain.com

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

export {
  DEV_MODE,
  baseApiUrl,
  theme
}
