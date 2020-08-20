import React, { FC } from 'react';

const Dropdown: FC = () => {
  return (
    <select>
      <option value="Content Creator">Content Creator</option>
      <option value="Video Programmer">Video Programmer</option>
      <option selected value="LD">
        LD
      </option>
      <option value="Production Designer">Production Designer</option>
    </select>
  );
};
export default Dropdown;
