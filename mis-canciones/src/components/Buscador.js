import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(0),
      width: "auto"
    }
  }
}));

const Buscador = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="on">
      <IconButton color="primary" type="reset">
        <HomeIcon />
      </IconButton>
      <TextField
        id="artist"
        name="artist"
        label="Artista"
        variant="outlined"
        size="small"
        required
      />
      <TextField
        id="song"
        name="song"
        label="Canción"
        variant="outlined"
        size="small"
        required
      />
      <IconButton color="primary" type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default Buscador;
