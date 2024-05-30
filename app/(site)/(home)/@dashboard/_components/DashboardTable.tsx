"use client";
import { useGetTable } from "@/lib/api/panelQueryFns";
import CustomDataGrid from "@/lib/components/molecules/CustomDataGrid";
import { COLOR } from "@/lib/constants/color";
import { Box, Container, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  {
    field: "type",
    headerName: "Type",
    width: 150,
    sortable: false,
    // renderCell: (params) => {
    //   return (
    //     <>
    //       {params?.value?.url ? (
    //         <Box
    //           width={35}
    //           height={35}
    //           sx={{
    //             borderRadius: '50%',
    //             overflow: 'hidden',
    //             position: 'relative',
    //             border: '1px solid',
    //             borderColor: 'primary.main',
    //           }}
    //         >
    //           <Image src={params?.value?.url || ''} alt="Profile Photo" fill />
    //         </Box>
    //       ) : (
    //         <Avatar sx={{ width: 35, height: 35 }} />
    //       )}
    //     </>
    //   );
    // },
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
  },
];

const DashboardTable = () => {
  const query = useGetTable();


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
            fontWeight: "bold",
            fontSize: "20px",
            color: COLOR.text_tertiary,
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
        />
      </Box>
    </Container>
  );
};

export default DashboardTable;
