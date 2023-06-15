import { call, put, takeEvery } from "redux-saga/effects";
import { toast } from "react-hot-toast";
import { DELETE, FORM_DATA_POST, GET, POST, PUT } from "../../services/methods";

import {
  CREATE_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  GET_ALL_EVENT,
  UPLOAD_EVENT_IMAGE,
} from "./event.type";
import {
  fetchLoading,
  fileUploadLoading,
  getAllEvents,
  storeEventImages,
} from "./event.reducer";

function* addEvent(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/event", req.payload);
    toast.success(res.data.message);
    yield getEvents();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* uploadEventImage(req) {
  try {
    let productData = new FormData();
    for (const file of req.files) {
      console.log("file", file);
      productData.append("file", file);
    }
    yield put(fileUploadLoading(true));
    const res = yield call(FORM_DATA_POST, "/blog/imageUpload", productData);
    console.log("res", res);
    yield put(storeEventImages(res.data.url));
  } catch (error) {
    console.log("error", error);
    toast.error(error.data.message);
  } finally {
    yield put(fileUploadLoading(false));
  }
}

function* getEvents() {
  try {
    const res = yield call(GET, "/event");
    yield put(getAllEvents(res.data));
  } catch (error) {
    console.log("get all category failed: ", error);
  }
}

function* deleteEvents(req) {
  try {
    const res = yield call(DELETE, `/event/${req.payload.id}`);
    toast.success(res.data.message);
    yield getEvents();
  } catch (error) {
    toast.error(error.data.message);
  }
}
function* editEvent(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(PUT, `/event/${req.id}`, req.payload);
    toast.success(res.data.message);
    yield getEvents();
  } catch (error) {
    toast.error(error.data.message);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* eventSaga() {
  yield takeEvery(CREATE_EVENT, addEvent);
  yield takeEvery(GET_ALL_EVENT, getEvents);
  yield takeEvery(UPLOAD_EVENT_IMAGE, uploadEventImage);
  yield takeEvery(DELETE_EVENT, deleteEvents);
  yield takeEvery(EDIT_EVENT, editEvent);
}

export default eventSaga;
