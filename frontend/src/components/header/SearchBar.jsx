import { makeStyles,InputBase} from "@material-ui/core";
import {Search} from '@material-ui/icons';
const usestyle= makeStyles((theme)=>({search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
   backgroundColor:'#fafafa',
    color:'black',
    marginLeft: 10,
    width: '30%',
    
    
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'black'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }

}))

const SearchBar=()=>{
    const classes=usestyle();
    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search for products"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    )
}
export default SearchBar;