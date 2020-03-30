import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PanToolIcon from "@material-ui/icons/PanTool";

const AlertDialog = ({ id, deleteSong }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <IconButton edge="end" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alerta de Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Estás apunto de borrar la canción con el id <b>{id}</b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              deleteSong(id);
              handleClose();
            }}
            color="primary"
          >
            <DeleteForeverIcon /> SÍ, eliminar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            <PanToolIcon /> NO, detente
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
