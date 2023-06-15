import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { DELETE, FORM_DATA_POST, GET, POST, PUT } from "../../services/methods";
import {
  fetchLoading,
  fileUploadLoading,
  getAllBlogs,
  storeBlogImage,
} from "./blog.reducer";
import {
  CREATE_BLOG,
  DELETE_BLOG,
  EDIT_BLOG,
  GET_ALL_BLOG,
  UPLOAD_BLOG_IMAGE,
} from "./blog.type";

function* addBlog(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/blog", req.payload);
    toast.success(res.message);
    yield getBlogs();
  } catch (error) {
    toast.error(error.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* uploadBlogImage(req) {
  try {
    let blogData = new FormData();
    for (const file of req.files) {
      console.log("file", file);
      blogData.append("file", file);
    }
    yield put(fileUploadLoading(true));
    const res = yield call(FORM_DATA_POST, "/blog/imageUpload", blogData);
    console.log("res", res);
    yield put(storeBlogImage(res.data.url));
  } catch (error) {
    console.log("error", error);
    // toast.error(error.message);
  } finally {
    yield put(fileUploadLoading(false));
  }
}

function* getBlogs() {
  try {
    const res = yield call(GET, "/blog");
    yield put(getAllBlogs(res.data));
  } catch (error) {
    console.log("getBlogs failed: ", error);
  }
}

function* editBlog(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(PUT, `/blog/${req.id}`, req.payload);
    yield getBlogs();
    toast.success(res.data.message);
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}
function* deleteBlogs(req) {
  try {
    const res = yield call(DELETE, `/blog/${req.payload.id}`);
    yield getBlogs();
    toast.success(res.data.message);
    yield getEvents();
  } catch (error) {
    toast.error(error.data.message);
  }
}

function* blogSaga() {
  yield takeEvery(CREATE_BLOG, addBlog);
  yield takeEvery(GET_ALL_BLOG, getBlogs);
  yield takeEvery(UPLOAD_BLOG_IMAGE, uploadBlogImage);
  yield takeEvery(EDIT_BLOG, editBlog);
  yield takeEvery(DELETE_BLOG, deleteBlogs);
}

export default blogSaga;
