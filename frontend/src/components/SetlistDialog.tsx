import React, { FC } from 'react';
import { CloseIcon } from '../assets/icons/index';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { PrimaryButton } from './index';

type SetlistDialogProps = {
  isOpen: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

const SetlistDialog: FC<SetlistDialogProps> = ({
  isOpen,
  setShowDialog,
}: SetlistDialogProps) => {
  const closeProjectDialog = () => setShowDialog(false);
  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={closeProjectDialog}
      className="fixed bg-black bg-opacity-25 inset-0 z-20 transition duration-150 ease-in-out"
    >
      <DialogContent className="w-1/2 bg-white relative mx-auto my-10 mt-10">
        <div className="flex">
          <div className="setlist-left-container">
            <p className="subtitle">Setlist Name</p>
            <h1 className="font-medium text-3xl mb-2">Divide 2019</h1>
            <p className="subtitle">Version</p>
            <h1 className="font-medium text-3xl mb-2">1</h1>
            <p className="subtitle">Date Modified</p>
            <h1 className="font-medium text-3xl mb-2">10th July 2020</h1>
            <p className="subtitle">Tracks</p>
            <h1 className="font-medium text-3xl mb-2">24</h1>
            <p className="subtitle">Users</p>
            <h1 className="font-medium text-3xl mb-2">4</h1>
            <div>
              <PrimaryButton>Update</PrimaryButton>
              <button className="btn-secondary">Delete Setlist</button>
            </div>
          </div>
          <div className="setlist-right-container">
            <button onClick={closeProjectDialog}>
              <CloseIcon className="w-6 absolute right-0 mt-0 mr-5" />
            </button>
            <h1>Setlist</h1>
            <div className="setlist-items">
              <div className="setlist-item">
                <h2 className="setlist-number">1</h2>
                <h1 className="setlist-songname">Sing</h1>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </DialogOverlay>
  );
};
export default SetlistDialog;
