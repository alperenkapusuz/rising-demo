'use client';
import { useGetTable } from '@/lib/api/panelQueryFns';
import CustomDataGrid from '@/lib/components/molecules/CustomDataGrid';
import { COLOR } from '@/lib/constants/color';
import { Box, Container, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import moment from 'moment';
import CustomActionMenu from '@/lib/components/atoms/CustomActionMenu';

const DashboardTable = () => {
  const query = useGetTable();

  const columns: GridColDef[] = [
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
      sortable: false,
    },
    {
      field: 'location',
      headerName: 'Location',
      width: 150,
      sortable: false,
    },
    {
      field: 'rental',
      headerName: 'Rental Period',
      width: 150,
      sortable: false,
    },
    {
      field: 'ipcount',
      headerName: 'Number of IP',
      width: 150,
      sortable: false,
    },
    {
      field: 'purpose',
      headerName: 'SpesificPurpose',
      width: 150,
      sortable: false,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
      sortable: false,
      renderCell: (params) => moment(params.value).format('DD MMM YYYY'),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: (params) => <CustomActionMenu params={params} />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: '40px' }}>
      <Box
        sx={{
          paddingY: '35px',
          paddingX: '40px',
          backgroundColor: COLOR.bg_secondary,
          borderRadius: '16px',
        }}
      >
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '20px',
            color: COLOR.text_tertiary,
            marginBottom: '16px',
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
