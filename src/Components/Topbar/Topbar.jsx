import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link, useHistory } from 'react-router-dom'
import { unsetActiveUser } from '../../Redux/user'

const drawerWidth = 240

const navLinks = [
  { label: 'About', link: '/' },
  { label: 'Add Community', link: '/add-community/', requiresAuth: true },
  { label: 'Communities', link: '/communities/', requiresAuth: true },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

const Topbar = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const history = useHistory()

  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)

  const { user } = useSelector(state => (state), shallowEqual)

  const handleSignOut = () => {
    window.localStorage.setItem('email', '')
    dispatch(unsetActiveUser())
    history.push('/sign-in')
  }

  const navLink = navLink => {
    const { label, link, requiresAuth } = navLink
    if (requiresAuth && !user.email) return null
    return (
      <Link to={link} key={link}>
        <ListItem button key={label}>
          <ListItemText primary={label} />
        </ListItem>
      </Link>
    )
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Communities of Practice
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <List>
          {navLinks.map(link => navLink(link))}
        </List>
        <Divider />
        {
          <List>
            {
              user.email
                ?
                <ListItem button key={'signout'} onClick={handleSignOut}>
                  <ListItemText primary={'Sign Out'} />
                </ListItem>
                :
                <Link to={'sign-in'} key={'signin'}>
                  <ListItem button key={'signin'} onClick={handleSignOut}>
                    <ListItemText primary={'Sign in'} />
                  </ListItem>
                </Link>
            }
          </List>
        }
      </Drawer>
      <main className={clsx(classes.content, { [classes.contentShift]: open, })} />
    </div>
  )
}

export { Topbar }
