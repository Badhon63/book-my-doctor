import React from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { updateBooking } from "@/lib/actions";

const UpdateBookingModal = ({ app }) => {
  const { date, doctorName, time, name, reason, _id } = app;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newData = Object.fromEntries(formData.entries());
    await updateBooking(_id, newData);
  };
  return (
    <div>
      <Modal>
        <Button className={"rounded-md"}>
          <FaEdit />
          Update
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Update Appointment</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                      className="w-full"
                      name="doctorName"
                      type="text"
                      variant="secondary"
                      defaultValue={doctorName}
                      isReadOnly
                    >
                      <Label>Doctor</Label>
                      <Input />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                      defaultValue={name}
                    >
                      <Label>Patient Name</Label>
                      <Input placeholder="Enter patient name" />
                    </TextField>

                    <div className="sm:flex gap-3">
                      <TextField
                        className="w-full pb-4 sm:pb-0"
                        name="date"
                        variant="secondary"
                        type="date"
                        defaultValue={date}
                      >
                        <Label>Date</Label>
                        <Input />
                      </TextField>

                      <TextField
                        className="w-full"
                        name="time"
                        variant="secondary"
                        type="time"
                        defaultValue={time}
                      >
                        <Label>Time</Label>
                        <Input />
                      </TextField>
                    </div>

                    <TextField
                      className="w-full"
                      name="reason"
                      variant="secondary"
                      defaultValue={reason}
                    >
                      <Label>
                        Reason <span className="opacity-50">(optional)</span>
                      </Label>
                      <Input placeholder="Brief reason for visit" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button slot="close" type="submit">
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateBookingModal;
