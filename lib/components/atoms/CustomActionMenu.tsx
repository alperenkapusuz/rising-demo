'use client';
import { COLOR } from '@/lib/constants/color';
import { Button,MenuItem } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import Menu, { MenuProps } from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';
import { toastWarning } from '@/lib/utils/toast-message';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
    },
  }));

const CustomActionMenu = ({ params }: { params: GridRenderCellParams }) => {
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
      toastWarning('Number of IP => ' + params.row.ipcount);
      console.log('Number of IP => ' + params.row.ipcount);
    };
  
    return (
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          sx={{
            backgroundColor: COLOR.bg_secondary,
            boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
            color: !open ? COLOR.text : COLOR.hover_tertiary,
            textTransform: 'unset',
            borderBottomLeftRadius: open ? 0 : 4,
            borderBottomRightRadius: open ? 0 : 4,
            fontWeight: '500',
            '&:hover': {
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
              padding: '12px',
              fontSize: '16px',
              color: 'rgba(106,106,106,1)',
            }}
          >
            Processing
          </MenuItem>
          <MenuItem
            onClick={handleAction}
            disableRipple
            disableGutters
            sx={{
              padding: '12px',
              fontSize: '16px',
              color: 'rgba(106,106,106,1)',
            }}
          >
            In Progress
          </MenuItem>
          <MenuItem
            onClick={handleAction}
            disableRipple
            disableGutters
            sx={{
              padding: '12px',
              fontSize: '16px',
              color: 'rgba(106,106,106,1)',
            }}
          >
            Completed
          </MenuItem>
        </StyledMenu>
      </div>
    );
  };
export default CustomActionMenu