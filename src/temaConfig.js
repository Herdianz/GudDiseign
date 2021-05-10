import { createMuiTheme } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[900]
        }
    }
})
export default theme;