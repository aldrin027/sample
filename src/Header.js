import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import {
  MenuItem,
  Button,
  Menu,
  TextField,
  DialogActions,
  Slide,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = ({ countries, setSearch }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = (e) => {
  //   if (e.target.getAttribute('value')) {
  //     setSearch(e.target.getAttribute('value'))
  //   }
  //   setAnchorEl(null);
  // };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>

        <Typography className={classes.title} variant="h6" noWrap>
          My Travels & Tours
        </Typography>

        <Autocomplete
          id="combo-box-demo-1"
          options={countries}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="standard" />}
          onChange={(e, data) => setSearch(data?.code ?? '')}
        />

        <Button variant="outlined" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button>
        <div className={classes.search}>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Please select a country to filter...
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {countries.map((country, key) => (
              <MenuItem key={key} value={country.code} onClick={handleClose}>
                {country.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <button>FB</button>
            <button>VIBER</button>
            <button>WHATSAPP</button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};

export default Header;
