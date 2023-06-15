import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CustomDialog = ({ open, title, content, actions, onClose }: any) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && <DialogContent>{content}</DialogContent>}
      {actions && (
        <DialogActions>
          {actions.map((action: any, index: number) => (
            <Button
              key={index}
              onClick={action.onClick}
              color={action.color || "primary"}
            >
              {action.label}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default CustomDialog;
