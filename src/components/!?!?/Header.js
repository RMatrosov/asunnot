import {Link} from "react-router-dom";
import {setIsOpen} from "../state/action-creator/singleCard";
import {useDispatch} from "react-redux";
import {AppBar, Box, IconButton, makeStyles, Toolbar, Tooltip, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssignmentIcon from '@material-ui/icons/Assignment';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#eceff1',
    textDecoration: 'none'
  },
  iconBtn: {
    border: 'none',
    color: '#eceff1',
    marginRight: 60
  },
  appBar: {
    backgroundColor: '#212121',
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  tooltip:{
    fontSize: 16,

  }
}));


export default function Header() {

  const classes = useStyles();

  const dispatch = useDispatch()

  function onSetClose() {
    dispatch(setIsOpen(false))
  }

  return (
      <div>
        {/*<Container maxWidth='lg'>
          <AppBar className={classes.appBar} position={"static"}>
            <Toolbar className={classes.toolBar}>
              <Link style={{textDecoration: 'none'}} to="/">
                <Typography variant="h6" className={classes.title} onClick={onSetClose}>
                  интернет магазин недвижимости
                </Typography>
              </Link>
              <Box>
                <Link to="/bids">
                  <Tooltip  title={ <span className={classes.tooltip}>Bids</span>}>
                    <IconButton className={classes.iconBtn} onClick={onSetClose}>
                      <AssignmentIcon/>
                    </IconButton>
                  </Tooltip>
                </Link>
                <Link to="/favorites">
                  <Tooltip title="Favorites">
                    <IconButton className={classes.iconBtn} onClick={onSetClose}>
                      <FavoriteIcon/>
                    </IconButton>
                  </Tooltip>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>*/}


        <div className="top-panel">
          <div className="top-panel__container">
            <Link to="/">
              <div className="top-panel__title" onClick={onSetClose}>
                интернет магазин недвижимости
              </div>
            </Link>

            <div className="top-panel__favourites">
              <Link to="/bids">
                <button className="btn-show-favourites" onClick={onSetClose}>
                  <i className="fas fa-heart"></i> Bids
                </button>
              </Link>
              <Link to="/favorites">
                <button className="btn-show-favourites" onClick={onSetClose}>
                  <i className="fas fa-heart"></i> Избранное
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="logo-wrapper">
          <Link to="/">
            <div className="logo">
              <div className="logo__title">КВАДРАТНЫЙ МЕТР</div>
              <div className="logo__subtitle">
                купить квартиру в один клик
              </div>
            </div>
          </Link>
        </div>
      </div>
  )
}