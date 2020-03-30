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

const Buscador = ({ search, setSearch, setError }) => {
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();

    setSearch({
      artist: e.target.artist.value,
      song: e.target.song.value,
      request: true
    });
  };

  const handleReset = e => {
    setSearch({
      artist: "",
      song: "",
      request: false
    });

    setError(false);
  };

  return (
    <form
      className={classes.root}
      autoComplete="on"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <IconButton color="primary" type="reset">
        <HomeIcon />
      </IconButton>
      <TextField
        id="artist"
        name="artist"
        label="Artista"
        variant="outlined"
        size="small"
        value={search.artist}
        onChange={e => {
          setSearch({
            ...search,
            artist: e.target.value,
            request: false
          });
        }}
        required
      />
      <TextField
        id="song"
        name="song"
        label="Canción"
        variant="outlined"
        size="small"
        value={search.song}
        onChange={e => {
          setSearch({
            ...search,
            song: e.target.value,
            request: false
          });
        }}
        required
      />
      <IconButton color="primary" type="submit">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default Buscador;
