// @ts-nocheck
import { useMemo, type ReactElement, useEffect, useState } from "react";
import { Box, CardHeader, IconButton, Tooltip } from "@mui/material";
import FullLayout from "../../src/layouts/full/FullLayout";
import CustomSwipeableDrawer from "../../src/components/common/Drawer/CustomSwipeableDrawer";
import PageTableLayout from "../../src/components/common/PageTableLayout";
import AddIcon from "@mui/icons-material/Add";
import CustomTable from "../../src/components/common/CustomTable/CustomTable";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EventForm from "../../src/components/ui-components/forms/EventForm";

import { DELETE_EVENT, GET_ALL_EVENT } from "../../src/redux/event/event.type";
import { useDispatch, useSelector } from "react-redux";
import CustomDialog from "../../src/components/common/CustomDialog/CustomDialog";
import { storeEventImages } from "../../src/redux/event/event.reducer";

function Header({
  cardHeader,
  icon,
  toolTipText,
  data,
  onClick = () => {},
}: any) {
  return (
    <>
      {cardHeader && cardHeader}
      <CustomSwipeableDrawer
        onClick={onClick}
        buttonLabel={
          <Tooltip title={toolTipText && toolTipText}>
            <IconButton
              sx={{
                background: "primary",
              }}
              size="small"
              onClick={onClick}
            >
              {icon && icon}
            </IconButton>
          </Tooltip>
        }
      >
        {({ openDrawer, setOpenDrawer }: any) =>
          openDrawer ? (
            <EventForm
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              formData={data}
            />
          ) : null
        }
      </CustomSwipeableDrawer>
    </>
  );
}

const Events = () => {
  const dispatch = useDispatch();
  const [isEventDelete, setIsEventDelete] = useState(false);
  const handleOpenDialog = (id) => {
    setIsEventDelete(id);
  };

  const handleCloseDialog = () => {
    setIsEventDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_EVENT, payload: { id: isEventDelete } });
    setIsEventDelete(false);
  };

  useEffect(() => {
    dispatch({ type: GET_ALL_EVENT });
  }, []);

  const columns = useMemo(
    () => [
      { label: "Title", field: "title", component: null },
      { label: "Description", field: "description", component: null },
      {
        label: "Image",
        field: "",
        component: (data: any): any => {
          return <img src={data?.image} height={"100px"} width={"200px"} />;
        },
      },
      { label: "Date", field: "date", component: null },
      { label: "Oder", field: "oder", component: null },
      { label: "Location", field: "location", component: null },
      {
        label: "Action",
        field: "Action",
        component: (params: any) => {
          return (
            <Box display="flex">
              <Header
                data={params}
                icon={<EditIcon />}
                toolTipText="Edit Event"
                onClick={() => {
                  // dispatch(storeEventImages(params.image));
                }}
              />
              <IconButton
                onClick={() => {
                  handleOpenDialog(params._id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        },
      },
    ],
    []
  );
  const { events } = useSelector((state) => state.event);

  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={
              <CardHeader sx={{ padding: "0px" }} title="Event List" />
            }
            icon={<AddIcon />}
            toolTipText="Add Event"
          />
        }
        content={<CustomTable data={events || []} columns={columns} />}
      />
      <CustomDialog
        open={isEventDelete}
        title="Remove Event"
        content="Are you sure you want to remove this event"
        actions={[
          {
            label: "Cancel",
            color: "primary",
            onClick: handleCloseDialog,
          },
          {
            label: "Remove",
            color: "error",
            onClick: handleDialogAction,
          },
        ]}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default Events;
Events.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
