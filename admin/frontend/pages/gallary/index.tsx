import type { ReactElement } from 'react';
import { CardHeader, IconButton, Tooltip, Typography } from '@mui/material';
import PageContainer from '../../src/components/container/PageContainer';
import DashboardCard from '../../src/components/shared/DashboardCard';
import FullLayout from '../../src/layouts/full/FullLayout';
import CustomSwipeableDrawer from '../../src/components/common/Drawer/CustomSwipeableDrawer';
import PageTableLayout from '../../src/components/common/PageTableLayout'
import BlogForm from '../../src/components/ui-components/forms/BlogForm';
import AddIcon from "@mui/icons-material/Add";
import EnhancedTable from '../../src/components/ui-components/table/Table';

const Blogs = () => {
  function Header() {
    return (
      <>
        <CardHeader sx={{ padding: "0px" }} title="Blog List" />
        <CustomSwipeableDrawer
          buttonLabel={
            <Tooltip title="Add Blog">
              <IconButton
                sx={{
                  background: "primary",
                }}
                size="small"
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
          }
        >
          {({ openDrawer, setOpenDrawer }: any) => (
            <BlogForm
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          )}
        </CustomSwipeableDrawer>
      </>
    );
  }

  return (
    <>
      <PageTableLayout
        title="Blogs List"
        header={<Header />}
        content={<EnhancedTable />}
      />
    </>
  );
};

export default Blogs;
Blogs.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};