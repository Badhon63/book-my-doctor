import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { MdDeleteForever } from "react-icons/md";
import { deleteBooking } from "@/lib/actions";
import toast from "react-hot-toast";

const DeleteModal = ({ app }) => {
  const handleDelete = async () => {
    const res = await deleteBooking(app._id);
    if (res.deletedCount > 0) {
      toast.success("Booking deleted.");
    } else {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button className={"rounded-md"} variant="danger">
          <MdDeleteForever />
          Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete the <strong>Booking</strong>.
                  This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button slot="close" variant="danger" onClick={handleDelete}>
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteModal;
