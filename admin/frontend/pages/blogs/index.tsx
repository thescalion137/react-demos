// @ts-nocheck
import { useMemo, type ReactElement, useEffect, useState } from "react";
import {
  Box,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import PageContainer from "../../src/components/container/PageContainer";
import DashboardCard from "../../src/components/shared/DashboardCard";
import FullLayout from "../../src/layouts/full/FullLayout";
import CustomSwipeableDrawer from "../../src/components/common/Drawer/CustomSwipeableDrawer";
import PageTableLayout from "../../src/components/common/PageTableLayout";
import BlogForm from "../../src/components/ui-components/forms/BlogForm";
import AddIcon from "@mui/icons-material/Add";
import EnhancedTable from "../../src/components/ui-components/table/Table";
import CustomTable from "../../src/components/common/CustomTable/CustomTable";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_BLOG, GET_ALL_BLOG } from "../../src/redux/blog/blog.type";
import CustomDialog from "../../src/components/common/CustomDialog/CustomDialog";
import { storeBlogImage } from "../../src/redux/blog/blog.reducer";

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
            <BlogForm setOpenDrawer={setOpenDrawer} formData={data} />
          ) : null
        }
      </CustomSwipeableDrawer>
    </>
  );
}

const Blogs = () => {
  const [isBlogDelete, setIsBlogDelete] = useState(false);
  const handleOpenDialog = (id) => {
    setIsBlogDelete(id);
  };
  const handleCloseDialog = () => {
    setIsBlogDelete(false);
  };

  const handleDialogAction = () => {
    dispatch({ type: DELETE_BLOG, payload: { id: isBlogDelete } });
    setIsBlogDelete(false);
  };
  const columns = useMemo(
    () => [
      { label: "Title", field: "title", component: null },
      { label: "Sub Title", field: "subTitle", component: null },
      { label: "Meta Description", field: "metaDescription", component: null },
      // { label: "Description", field: "description", component: null },
      {
        label: "Image",
        field: "",
        component: (data: any): any => {
          return <img src={data?.image} height={"100px"} width={"200px"} />;
        },
      },
      { label: "Date", field: "date", component: null },
      { label: "Oder", field: "oder", component: null },
      { label: "Blog Type", field: "blogType", component: null },
      {
        label: "Action",
        field: "Action",
        component: (params: any) => {
          return (
            <Box display="flex">
              <Header
                data={params}
                icon={<EditIcon />}
                toolTipText="Edit Blog"
                onClick={() => {
                  console.log("callllll");
                  // dispatch(storeBlogImage(params.image));
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
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch({ type: GET_ALL_BLOG });
  }, []);

  return (
    <>
      <PageTableLayout
        header={
          <Header
            cardHeader={
              <CardHeader sx={{ padding: "0px" }} title="Blog List" />
            }
            icon={<AddIcon />}
            toolTipText="Add Blog"
          />
        }
        content={<CustomTable data={blogs || []} columns={columns} />}
      />
      <CustomDialog
        open={isBlogDelete}
        title="Delete Blog"
        content="Are you sure you want to delete this blog"
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

export default Blogs;
Blogs.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
