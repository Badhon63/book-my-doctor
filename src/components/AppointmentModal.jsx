"use client";

import React from "react";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const AppointmentModal = ({ docDetails, createAppointment }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userId = user?.id;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const appointment = Object.fromEntries(formData.entries());
    appointment.userId = userId;
    await createAppointment(appointment);
  };

  return (
    <div>
      <Modal>
        <Button className={"rounded-md mt-3"}>Book Appointment</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Book Appointment</Modal.Heading>
                <p className="-mt-2 text-sm leading-5 text-muted">
                  with {docDetails.name}
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                      className="w-full"
                      name="email"
                      type="email"
                      variant="secondary"
                      defaultValue={user?.email}
                      isReadOnly
                    >
                      <Label>User Email</Label>
                      <Input />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="doctorName"
                      type="text"
                      variant="secondary"
                      defaultValue={docDetails.name}
                      isReadOnly
                    >
                      <Label>Doctor Name</Label>
                      <Input />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                      isRequired
                    >
                      <Label>Patient Name</Label>
                      <Input placeholder="Enter patient name" />
                    </TextField>

                    <div className="sm:flex gap-3">
                      <Select
                        className="w-[256px] "
                        placeholder="Select one"
                        name="gender"
                        isRequired
                      >
                        <Label>Gender</Label>
                        <Select.Trigger className={"bg-[#EBEBEC]"}>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="male" textValue="male">
                              Male
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="female" textValue="female">
                              Female
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="others" textValue="others">
                              Others
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <TextField
                        className="w-full"
                        name="phone"
                        type="tel"
                        variant="secondary"
                        isRequired
                      >
                        <Label>Phone</Label>
                        <Input placeholder="Enter your phone number" />
                      </TextField>
                    </div>

                    <div className="sm:flex gap-3">
                      <TextField
                        className="w-full pb-4 sm:pb-0"
                        name="date"
                        variant="secondary"
                        type="date"
                        isRequired
                      >
                        <Label>Date</Label>
                        <Input />
                      </TextField>

                      <TextField
                        className="w-full"
                        name="time"
                        variant="secondary"
                        type="time"
                        isRequired
                      >
                        <Label>Time</Label>
                        <Input />
                      </TextField>
                    </div>

                    <TextField
                      className="w-full"
                      name="reason"
                      variant="secondary"
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
                      <Button slot="" type="submit">
                        Confirm Booking
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

export default AppointmentModal;
