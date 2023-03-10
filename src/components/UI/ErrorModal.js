import React from 'react'
import styles from './ErrorModal.module.css'
import { Modal,Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { errorModalActions } from '../../Redux-Store/errorModal-slice';
function ErrorModal(props) {
  const dispatch = useDispatch()
  const errorMessage = useSelector(state => state.errorModal.errorMessage)
  const onShow = useSelector(state => state.errorModal.show)
    
  console.log(onShow)
  console.log(errorMessage)
  console.log('error modal')
  const onCloseHandler = () => {
     dispatch(errorModalActions.onClose()) 
  }
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={onShow}
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" >
          Something went wrong...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{errorMessage}</h4>
      </Modal.Body>
      <Modal.Footer>
      <Button  className={styles.Button} onClick={onCloseHandler}>
        Close
      </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;