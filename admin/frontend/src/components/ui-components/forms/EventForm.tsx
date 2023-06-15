// @ts-nocheck
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import DeleteIcon from "@mui/icons-material/Delete";
import FormikForm from "../../common/FormikForm";
import Dropdown from "../../common/Dropdown";
import { UPLOAD_BLOG_IMAGE, CREATE_BLOG } from "../../../redux/blog/blog.type";
import {
  clearBlogImage,
  deleteBlogImage,
} from "../../../redux/blog/blog.reducer";
import {
  CREATE_EVENT,
  EDIT_EVENT,
  UPLOAD_EVENT_IMAGE,
} from "../../../redux/event/event.type";
import {
  deleteEventImage,
  storeEventImages,
} from "../../../redux/event/event.reducer";

const validation = Yup.object({
  name: Yup.string().required("Please enter product name"),
  subcategory: Yup.string().required("Please select subcategory."),
  price: Yup.number().required(),
  quantity: Yup.number().required(),
});

const EventForm = ({ setOpenDrawer, openDrawer, formData = null }: any) => {
  const dispatch = useDispatch();
  const { isFileUploadLoading, eventImages } = useSelector(
    (state: any) => state.event
  );
  console.log(eventImages, "eventImages");

  const uploadImage = (files: any) => {
    dispatch({ type: UPLOAD_EVENT_IMAGE, files });
  };

  const handleSubmit = (values: any, { resetForm }: any) => {
    const payload = { ...values, image: eventImages };
    dispatch({
      type: formData ? EDIT_EVENT : CREATE_EVENT,
      payload,
      id: formData?._id || "",
    });
    resetForm();
    dispatch(clearBlogImage());
    setOpenDrawer(false);
  };
  useEffect(() => {
    if (formData) {
      dispatch(storeEventImages(formData.image));
    }
    return () => {
      console.log("called");

      dispatch(storeEventImages(""));
    };
  }, [formData]);

  return (
    <div>
      <FormikForm
        initialValues={
          formData
            ? {
                title: formData.title,
                description: formData.description,
                image: formData.image,
                date: formData.date,
                location: formData.location,
              }
            : {
                title: "",
                description: "",
                image: "",
                date: "",
                location: "",
              }
        }
        // validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {(params: any) => (
          <>
            <DialogTitle
              sx={{
                margin: "0px",
                fontWeight: "500",
                color: "rgb(18, 25, 38)",
                fontFamily: "Roboto, sans-serif",
                lineHeight: "1.6",
                padding: "16px 24px",
                flex: "0 0 auto",
                fontSize: "1.25rem",
              }}
            >
              Add Event
            </DialogTitle>
            <DialogContent
              sx={{ flex: "1 1 auto", overflowY: "auto", padding: "20px 24px" }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexFlow: "row wrap",
                  width: "calc(100% + 24px)",
                  marginLeft: "-24px",
                  marginTop: "2px",
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    error={params.errors.title}
                    helperText={params.errors.title}
                    id="filled-error-helper-text"
                    label="Title"
                    variant="outlined"
                    name="title"
                    color="primary"
                    value={params.values.title}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={params.errors.description}
                    id="filled-error-helper-text"
                    label="Description"
                    variant="outlined"
                    name="description"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.description}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField
                    error={params.errors.description}
                    id="filled-error-helper-text"
                    label="Product Description"
                    variant="outlined"
                    name="description"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.description}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    error={params.errors.date}
                    id="filled-error-helper-text"
                    label=""
                    variant="outlined"
                    name="date"
                    color="primary"
                    value={params.values.date}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                    type="date"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={params.errors.location}
                    id="filled-error-helper-text"
                    label="Location"
                    variant="outlined"
                    name="location"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.location}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FileUploader
                    disabled={isFileUploadLoading}
                    multiple={true}
                    handleChange={
                      (file: any) => {
                        uploadImage(file);
                      }
                      // params.setFieldValue("file", file)
                    }
                    name="file"
                    types={["JPEG", "PNG"]}
                  />
                </Grid>

                <Grid item xs={12}>
                  {isFileUploadLoading ? (
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      height={300}
                      width="100%"
                    >
                      <CircularProgress />
                    </Box>
                  ) : (
                    <ImageList
                      sx={{
                        width: "100%",
                      }}
                    >
                      {eventImages.length ? (
                        <ImageListItem key={eventImages}>
                          <img
                            src={`${eventImages}?w=248&fit=crop&auto=format`}
                            srcSet={`${eventImages}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={"images"}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ) : (
                        <div style={{ color: "red", flexGrow: 1 }}>
                          * Please upload Image
                        </div>
                      )}
                    </ImageList>
                  )}
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button type="submit" disabled={isFileUploadLoading}>
                {formData ? "update" : "create"}
              </Button>
              <Button
                onClick={() => {
                  setOpenDrawer(false);
                  dispatch(clearBlogImage());
                  params.resetForm();
                }}
              >
                Cancel
              </Button>
            </DialogActions>
          </>
        )}
      </FormikForm>
    </div>
  );
};

export default EventForm;
