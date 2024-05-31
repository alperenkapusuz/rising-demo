"use client";
import { useGetTable } from "@/lib/api/panelQueryFns";
import CustomDataGrid from "@/lib/components/molecules/CustomDataGrid";
import { COLOR } from "@/lib/constants/color";
import { Box, Button, Container, MenuItem, Typography } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";
import moment from 'moment';
import { toastWarning } from "@/lib/utils/toast-message";


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
  },
}));

const ActionsMenu = ({ params }: { params: GridRenderCellParams }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = () => {
    setAnchorEl(null);
    toastWarning("Number of IP" + params.row.ipcount);
    console.log("Number of IP" + params.row.ipcount);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon  /> : <KeyboardArrowDownIcon/>}
        sx={{
          backgroundColor: COLOR.bg_secondary,
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.15)",
          color: !open ? COLOR.text : COLOR.hover_tertiary,
          textTransform: "unset",
          borderBottomLeftRadius: open ? 0 : 4,
          borderBottomRightRadius: open ? 0 : 4,
          fontWeight: "500",
          "&:hover": {
            backgroundColor: COLOR.bg_secondary,
            color: COLOR.hover_tertiary,
          },
        }}
      >
        Actions
      </Button>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem
          onClick={handleAction}
          disableRipple
          disableGutters
          sx={{
            padding: "12px",
            fontSize: "16px",
            color: "rgba(106,106,106,1)",
          }}
        >
          Processing
        </MenuItem>
        <MenuItem
          onClick={handleAction}
          disableRipple
          disableGutters
          sx={{
            padding: "12px",
            fontSize: "16px",
            color: "rgba(106,106,106,1)",
          }}
        >
          In Progress
        </MenuItem>
        <MenuItem
          onClick={handleAction}
          disableRipple
          disableGutters
          sx={{
            padding: "12px",
            fontSize: "16px",
            color: "rgba(106,106,106,1)",
          }}
        >
          Completed
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

const DashboardTable = () => {
  const query = useGetTable();

  const columns: GridColDef[] = [
    {
      field: "type",
      headerName: "Type",
      width: 150,
      sortable: false,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
      sortable: false,
    },
    {
      field: "rental",
      headerName: "Rental Period",
      width: 150,
      sortable: false,
    },
    {
      field: "ipcount",
      headerName: "Number of IP",
      width: 150,
      sortable: false,
    },
    {
      field: "purpose",
      headerName: "SpesificPurpose",
      width: 150,
      sortable: false,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      sortable: false,
      renderCell: (params) => moment(params.value).format('DD MMM YYYY'),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      renderCell: (params) => <ActionsMenu params={params} />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: "40px" }}>
      <Box
        sx={{
          paddingY: "35px",
          paddingX: "40px",
          backgroundColor: COLOR.bg_secondary,
          borderRadius: "16px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "20px",
            color: COLOR.text_tertiary,
            marginBottom: "16px",
          }}
        >
          Transactions History
        </Typography>
        <CustomDataGrid
          columns={columns}
          rows={query.data?.data || []}
          dataStatus={query.isLoading}
          rowCount={query.data?.data?.length || 0}
          getRowId={(row) => row.purpose}
          paginationMode="server"
        />
      </Box>
    </Container>
  );
};

export default DashboardTable;
