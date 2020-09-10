import React, { FC, useState, useEffect } from 'react';
import { ReactComponent as CloseIco } from '../assets/icons/x.svg';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Button from './Button';
import ErrorAlert from './ErrorAlert';
import * as api from '../api/api';
import { useAuth0 } from '@auth0/auth0-react';

type ProjectDialogProps = {
  isOpen: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectDialog: FC<ProjectDialogProps> = ({
  isOpen,
  setShowDialog,
}: ProjectDialogProps) => {
  const closeProjectDialog = () => setShowDialog(false);
  const { getAccessTokenSilently } = useAuth0();

  // hook for getting input value
  const [inputValue, setInputValue] = useState<string>('');
  // function for new artist POST
  const NewArtist = async () => {
    if (inputValue !== '') {
      const accessToken = await getAccessTokenSilently();
      api.artist.create(inputValue, accessToken);
      setShowDialog(false);
      alert(inputValue + ' Project Created!');
      setInputValue('');
    } else {
    }
  };

  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={closeProjectDialog}
      className="fixed bg-black bg-opacity-25 inset-0 z-20 "
    >
      <DialogContent className="w-1/4 bg-white relative mx-auto my-32 px-8 py-5">
        <button onClick={closeProjectDialog}>
          <CloseIco className="w-6 absolute right-0 mt-0 mr-5" />
        </button>
        <h1 className="text-3xl font-medium mt-3 mb-3">New Artist</h1>
        <ErrorAlert errormsg="Please add an Artist name" />
        <form>
          <input
            type="text"
            value={inputValue}
            placeholder="Artist Name"
            className="bg-primary py-2 px-1 w-full mb-6"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setInputValue(ev.target.value)
            }
            required
          />
          <Button onClick={NewArtist}>Create Artist</Button>
        </form>
      </DialogContent>
    </DialogOverlay>
  );
};
export default ProjectDialog;
