import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/styles";
import { Alert } from "@material-ui/lab";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    background: "#1A1D21",
    borderRadius: "16px",
    boxShadow:
      "0px 8px 12px 0px rgba(255, 255, 255, 0.04) inset, 0px 24px 64px -16px rgba(0, 0, 0, 0.24), 16px 24px 64px -24px rgba(255, 255, 255, 0.04) inset",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    p: "16px 20px",
    color: theme.palette.secondary.main,
  },
  backdrop: {
    background: "rgba(6, 7, 8, 0.64)",
    backdropFilter: "blur(4px)",
  },
  underline: {
    "&:before": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  root: {
    color: theme.palette.secondary.main,
    fontWeight: 300,
    fontSize: "18px",
    "& .MuiFormLabel-root": {},
  },
  label: {
    color: theme.palette.secondary.main,
  },
  message: {
    border: `2px solid ${theme.palette.secondary.main}`,
    marginTop: "3em",
    borderRadius: 5,
    padding: "4px",
  },
  SendButton: {
    fontFamily: "Pacifico",
    borderRadius: 50,
    height: 49,
    width: 245,
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#FFBA60",
    "&:hover": {
      backgroundColor: "#FFBA60",
    },
    "&.Mui-disabled": {
      opacity: 0.5,
      color: "#fff",
    },
  },
}));
export default function ContactPopup({ open, setOpen }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const initialData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    active: false,
    message: "",
  });
  const submitFormHandler = () => {
    if (data.name === "" || data.email === "" || data.message === "") {
      setError({
        active: true,
        message: "Please Fill all fields to continue",
      });
      return;
    }
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm.test(
        data.email
      )
    ) {
      setError({
        active: true,
        message: "Ïnvalid Email",
      });
      return;
    }
    if (
      !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data.phone)
    ) {
      setError({ active: true, message: "Invalid Phone Number" });
      return;
    }
    setLoading(true);
    const url = "/api/sendmail";

    axios
      .post(url, data)
      .then((data) => {
        const { status } = data.data;
        if (status === "success") {
          setData(initialData);
          setOpen(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError({
          active: true,
          message: "Something Went wrong! Please try Again",
        });
      });
  };
  const width = matchesMD ? "70%" : matchesSM ? "90%" : "97%";
  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      maxWidth='md'
      fullWidth
      classes={{
        paper: classes.dialogPaper,
        container: classes.backdrop,
      }}
    >
      <DialogContent style={{ position: "relative" }}>
        <div style={{ position: "absolute", right: 5, top: 5 }}>
          <IconButton
            style={{ padding: 0, background: "transparent" }}
            onClick={() => {
              setData(initialData);
              setOpen(false);
            }}
          >
            <CancelIcon style={{ fill: theme.palette.secondary.main }} />
          </IconButton>
        </div>
        <Grid container direction='column' alignItems='center'>
          {/* heading */}
          <Grid item style={{ width: "100%", marginTop: "20px" }}>
            <Typography
              variant='h4'
              align='center'
              style={{
                fontFamily: "Pacifico",
                fontWeight: 700,
                color: theme.palette.secondary.main,
              }}
              gutterBottom
            >
              Send us Message Now
            </Typography>
          </Grid>
          {/* name */}
          <Grid item style={{ width: width, marginTop: "30px" }}>
            <TextField
              label='Name'
              id='name'
              fullWidth
              InputProps={{
                classes: {
                  root: classes.root,
                  underline: classes.underline,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                },
              }}
              value={data.name}
              onChange={(e) => {
                setData({
                  ...data,
                  name: e.target.value,
                });
              }}
            />
          </Grid>
          {/* email */}
          <Grid item style={{ width: width, marginTop: "30px" }}>
            <TextField
              label='Email'
              id='email'
              fullWidth
              InputProps={{
                classes: {
                  root: classes.root,
                  underline: classes.underline,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                },
              }}
              value={data.email}
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
            />
          </Grid>
          {/* phone */}
          <Grid item style={{ width: width, marginTop: "30px" }}>
            <TextField
              label='Phone'
              id='phone'
              fullWidth
              InputProps={{
                classes: {
                  root: classes.root,
                  underline: classes.underline,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                },
              }}
              value={data.phone}
              onChange={(e) =>
                setData({
                  ...data,
                  phone: e.target.value,
                })
              }
            />
          </Grid>
          {/* message */}
          <Grid item style={{ width: width, marginTop: "30px" }}>
            <TextField
              multiline
              minRows={matchesSM ? 3 : 5}
              fullWidth
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.root,
                  underline: classes.underline,
                },
              }}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                },
              }}
              placeholder='Hello! We have an idea that we’d just love to share.'
              id='message'
              value={data.message}
              onChange={(e) =>
                setData({
                  ...data,
                  message: e.target.value,
                })
              }
              className={classes.message}
            />
          </Grid>
          {error.active && (
            <Grid item style={{ marginTop: "1em", width: width }}>
              <Alert severity='warning'>{error.message}</Alert>
            </Grid>
          )}
          {/* submit */}
          <Grid item style={{ marginTop: "40px" }}>
            <Button
              disabled={
                loading ||
                data.name.length === 0 ||
                data.message.length === 0 ||
                data.phone.length === 0 ||
                data.email.length === 0
              }
              variant='contained'
              className={classes.SendButton}
              onClick={submitFormHandler}
            >
              {loading && (
                <CircularProgress
                  size={"1rem"}
                  style={{ fill: "#000", marginRight: "6px" }}
                />
              )}
              Send Message{" "}
              <img
                src='/dev/send.svg'
                alt='aeroplane'
                style={{ marginLeft: "1em" }}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginTop: "10px" }}>
            <Button
              style={{
                fontWeight: 300,
                fontFamily: "Montserrat",
                color: "#fff",
                textTransform: "none",
              }}
              color='primary'
              onClick={() => {
                setData(initialData);
                setOpen(false);
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
