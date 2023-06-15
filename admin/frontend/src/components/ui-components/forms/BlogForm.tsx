// @ts-nocheck
"use client";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  TextField,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import DeleteIcon from "@mui/icons-material/Delete";
import FormikForm from "../../common/FormikForm";
import {
  UPLOAD_BLOG_IMAGE,
  CREATE_BLOG,
  EDIT_BLOG,
} from "../../../redux/blog/blog.type";
import {
  clearBlogImage,
  deleteBlogImage,
  storeBlogImage,
} from "../../../redux/blog/blog.reducer";
import Dropdown from "../../common/Dropdown";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const blogTypes = [
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "Main",
    value: "main",
  },
];

const validation = Yup.object({
  title: Yup.string().required("Please enter Title"),
  subTitle: Yup.string().required("Please enter Sub Title"),
  metaDescription: Yup.string().required("Please enter meta description"),
  description: Yup.string().required("Please enter description"),
  date: Yup.string().required("Please select subcategory."),
});

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
};

const formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

const BlogForm = ({ setOpenDrawer, openDrawer, formData = null }: any) => {
  const dispatch = useDispatch();
  const { isFileUploadLoading, blogsImage } = useSelector(
    (state: any) => state.blogs
  );

  const uploadImage = (files: any) => {
    dispatch({ type: UPLOAD_BLOG_IMAGE, files });
  };

  const handleSubmit = (values: any, { resetForm }: any) => {
    const payload = { ...values, image: blogsImage };
    dispatch({
      type: formData ? EDIT_BLOG : CREATE_BLOG,
      payload,
      id: formData?._id || "",
    });
    setOpenDrawer(false);
    dispatch(storeBlogImage(""));
    resetForm();
  };

  const handleDeleteImage = () => {
    dispatch(deleteBlogImage());
  };
  const [value, setValue] = useState("");

  const handleChange = (
    content: any,
    delta: any,
    source: any,
    editor: any,
    setFieldValue: any
  ) => {
    setFieldValue("description", editor.getHTML());
  };
  useEffect(() => {
    if (formData) {
      dispatch(storeBlogImage(formData.image));
    }
    return () => {
      console.log("called");

      dispatch(storeBlogImage(""));
    };
  }, [formData]);

  return (
    <div>
      <FormikForm
        initialValues={
          formData
            ? {
                title: formData.title,
                subTitle: formData.subTitle,
                metaDescription: formData.metaDescription,
                description: formData.description,
                image: formData.image,
                date: formData.date,
                oder: formData.oder,
                blogType: formData.blogType,
              }
            : {
                title: "",
                subTitle: "",
                metaDescription: "",
                description: "",
                image: "",
                date: "",
                oder: "",
                blogType: "normal",
              }
        }
        validationSchema={validation}
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
              {formData ? "Edit Blog" : "Add Blog"}
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
                    error={params.errors.subTitle}
                    helperText={params.errors.subTitle}
                    id="filled-error-helper-text"
                    label="Sub Title"
                    variant="outlined"
                    name="subTitle"
                    color="primary"
                    value={params.values.subTitle}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={params.errors.metaDescription}
                    id="filled-error-helper-text"
                    label="Meta Description"
                    variant="outlined"
                    name="metaDescription"
                    color="primary"
                    multiline
                    rows="3"
                    value={params.values.metaDescription}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    id="editor-container"
                    value={params.values.description}
                    onChange={(
                      content: any,
                      delta: any,
                      source: any,
                      editor: any
                    ) => {
                      handleChange(
                        content,
                        delta,
                        source,
                        editor,
                        params.setFieldValue
                      );
                    }}
                  />
                </Grid>
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
                    error={params.errors.oder}
                    id="filled-error-helper-text"
                    label="oder"
                    variant="outlined"
                    name="oder"
                    color="primary"
                    value={params.values.oder}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                    type="number"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <TextField
                    error={params.errors.blogType}
                    id="filled-error-helper-text"
                    label="Blog Type"
                    variant="outlined"
                    name="blogType"
                    color="primary"
                    value={params.values.blogType}
                    onChange={params.handleChange}
                    onBlur={params.handleBlur}
                    fullWidth
                  /> */}
                  <Dropdown
                    error={params.errors.blogType}
                    helperText={params.errors.blogType}
                    name="blogType"
                    label="blogType"
                    options={blogTypes || []}
                    value={params.values.blogType}
                    onChange={params.handleChange}
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
                      {blogsImage.length ? (
                        <ImageListItem key={blogsImage}>
                          <img
                            src={`${blogsImage}?w=248&fit=crop&auto=format`}
                            srcSet={`${blogsImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
                {formData ? "Update" : "create"}
              </Button>
              <Button
                onClick={() => {
                  dispatch(storeBlogImage(""));
                  setOpenDrawer(false);
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

export default BlogForm;
