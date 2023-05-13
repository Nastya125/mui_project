import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const regEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z0-9_-]+)/;
const regName = /[a-zA-Za-яА-Я]/

function validateEmail(email) {
    return regEmail.test(email);
}

function validateName(name) {
    return name.length > 1 && regName.test(name) ;
}

function ModalNotification({isOpen}) {

    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [isValidateEmail, setValidateEmail] = useState(false);
    const [isValidateName, setValidateName] = useState(false);
    const [isTouchedEmail, setTouchedEmail] = useState(false);
    const [isTouchedName, setTouchedName] = useState(false);

    useEffect(() => {
        setOpen(isOpen)
    }, [isOpen]);

    useEffect(() => {
       if(validateEmail(email)) {
        setValidateEmail(true)
       } else {
        setValidateEmail(false)
       }

    }, [email]);

    useEffect(() => {
      if(validateName(name)) {
       setValidateName(true)
      } else {
        setValidateName(false)
      }

   }, [name]);

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
            type="text"
            fullWidth
            variant="standard"
            color={isTouchedName ?  isValidateName ? "success" : "error": "primary"}
            onChange={(event) => {
              setName(event.target.value);
            }}
            onClick={(event) => {
              setTouchedName(true);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Почта"
            type="email"
            fullWidth
            variant="standard"
            color={isTouchedEmail ? isValidateEmail ? "success" : "error" : "primary" }
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onClick={(event) => {
              setTouchedEmail(true);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button disabled={!isValidateEmail || !isValidateName} variant={isValidateEmail && isValidateName ? "success" : 'error'} onClick={handleClose}>Подписаться</Button>
        </DialogActions>
      </Dialog>
    
  );
}

export default ModalNotification;