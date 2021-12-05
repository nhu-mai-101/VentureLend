import React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { Close } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  back:(e: React.SyntheticEvent) => void;
  next:(e: React.SyntheticEvent) => void;
}

const StepOne = ({ back, next }: Props) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (e: React.SyntheticEvent) => {
    setOpen(false);
    back(e)
  }

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Close onClick={handleClose} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Step One
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={next}>Next</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default StepOne;