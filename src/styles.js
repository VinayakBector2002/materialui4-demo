import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon:{
        marginRight: '100px',
    },
    buttons :{
        marginTop: theme.spacing(20)
    }

}));

export default useStyles;