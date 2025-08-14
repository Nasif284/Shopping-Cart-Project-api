import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './ProductZoom';
import ProductDetailsComponent from './ProductDetailsComponent';
import Button from '@mui/material/Button';
import { IoMdClose } from 'react-icons/io';

const ProductDialogBox = ({ open,setOpen}) => {
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <Dialog fullWidth={true} maxWidth={"lg"} open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div className="flex items-center w-full relative">
          <div className="col1 w-[40%]">
            <ProductZoom />
          </div>
          <div className="col2 w-[60%] pl-10 pr-7">
            <ProductDetailsComponent />
          </div>
          <Button onClick={handleClose} className="!absolute !top-0 !right-0 !rounded-full w-[40px] h-[40px] !min-w-[40px] !text-[rgba(0,0,0,0.7)]">
            <IoMdClose className="text-[25px]" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDialogBox