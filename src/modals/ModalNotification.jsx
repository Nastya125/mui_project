import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ModalNotification({isOpen}) {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen])

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Подпишитесь!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Подпишитесь на рассылку, чтобы получать уведомления о новых статьях. Введите свой email в поле ниже
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ваше имя"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Почта"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleClose}>Подписаться</Button>
        </DialogActions>
      </Dialog>
    
  );
}

export default ModalNotification;