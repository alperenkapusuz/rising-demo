import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { COLOR } from '@/lib/constants/color';
import CustomButton from './CustomButton';
import CloseIcon from '@mui/icons-material/Close';

const WARNING_COLOR = COLOR.danger;
const INFO_COLOR = COLOR.primary;
const TIMEOUT = COLOR.warning;
const DEFAULT_COLOR = COLOR.text;

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(3),
    marginTop: 20,
  },
}));

type Props = {
  modalType: 'WARNING' | 'INFO' | 'TIMEOUT' | 'DEFAULT' | 'CONTINUE';
  open: boolean;
  handleClose: () => void;
  handleAction: () => void;
  title: string;
  description?: string;
  buttonText?: string;
} & (WarningModalProps | ConfirmModalProps | SuccessModalProps | LoadingModalProps);

type WarningModalProps = {};

type ConfirmModalProps = {};

type SuccessModalProps = {};

type LoadingModalProps = {};

const ConfirmModal = (props: Props) => {
  const { modalType, open, handleClose, handleAction, title, description } = props;

  const handleColor = (modalType: string) => {
    switch (modalType) {
      case 'WARNING':
        return WARNING_COLOR;
      case 'INFO':
        return INFO_COLOR;
      case 'DEFAULT':
        return DEFAULT_COLOR;
      case 'TIMEOUT':
        return TIMEOUT;
      case 'CONTINUE':
        return INFO_COLOR;
      default:
        return 'none';
    }
  };

  const handleIcon = (modalType: string) => {
    switch (modalType) {
      case 'WARNING':
        return (
          <WarningRoundedIcon
            sx={{
              color: handleColor(modalType),
              fontSize: '40px',
              marginRight: '10px',
            }}
          />
        );
      case 'INFO':
        return (
          <InfoIcon
            sx={{
              color: handleColor(modalType),
              fontSize: '40px',
              marginRight: '10px',
            }}
          />
        );
      case 'DEFAULT':
        return 'none';
      case 'TIMEOUT':
        return (
          <AccessTimeIcon
            sx={{
              color: handleColor(modalType),
              fontSize: '40px',
              marginRight: '10px',
            }}
          />
        );
      case 'CONTINUE':
        return (
          <SendIcon
            sx={{
              color: handleColor(modalType),
              fontSize: '40px',
              marginRight: '10px',
            }}
          />
        );
      default:
        return 'none';
    }
  };

  const handleButtonColor = (modalType: string) => {
    switch (modalType) {
      case 'WARNING':
        return 'error';
      case 'INFO':
        return 'primary';
      case 'DEFAULT':
        return 'primary';
      case 'TIMEOUT':
        return 'warning';
      case 'CONTINUE':
        return 'primary';
      default:
        return 'primary';
    }
  };

  return (
    <>
      <StyledDialog
        sx={{
          '& .MuiDialog-paper': {},
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle id="customized-dialog-title">{title}</DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: "text.primary"
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
        {description && (
          <DialogContent
            sx={{
              borderRadius: '3px',
            }}
          >
            {handleIcon(modalType)}
            <DialogContentText
              sx={{
                color: handleColor(modalType),
                fontWeight: '500',
                fontSize: '16px',
              }}
            >
              {props.description}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          {modalType === 'TIMEOUT' ? (
            <CustomButton title="Okey" onClick={handleAction} style={{ minWidth: '120px' }} />
          ) : (
            <>
              <CustomButton
                title="Continue"
                variant="contained"
                onClick={handleAction}
                style={{ minWidth: '120px' }}
                color={handleButtonColor(modalType)}
              >
                {props.buttonText || 'Continue'}
              </CustomButton>
            </>
          )}
        </DialogActions>
      </StyledDialog>
    </>
  );
};

export default ConfirmModal;