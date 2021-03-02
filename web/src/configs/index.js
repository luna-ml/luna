import { createMuiTheme } from '@material-ui/core/styles';
const DEV_MODE = (process.env.NODE_ENV === "development")

const baseApiUrl = "http://localhost:5000"


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
