import React from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { updateUser } from "@/lib/actions";

const UpdateProfileModal = () => {
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedUserData = Object.fromEntries(formData.entries());
    const res = await updateUser(userId, updatedUserData);
    console.log(res);
  };

  return (
    <div>
      <Modal>
        <Button className={"w-full rounded-xl"}>
          <FaEdit />
          Update Profile
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-lg">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Update Profile</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Name</Label>
                      <Input placeholder="Enter your new name" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="image"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Photo URL</Label>
                      <Input placeholder="Enter your new image URL" />
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

export default UpdateProfileModal;
