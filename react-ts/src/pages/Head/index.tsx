import React, { FC, memo, forwardRef, useImperativeHandle } from 'react';

interface IProps {
  disabled: boolean;
  handleAdd: () => void;
}

const Head: FC<IProps> = ({ disabled, handleAdd }) => {
  return (
    <div>
      <button onClick={handleAdd} disabled={disabled}> 点击我种 🍄 </button>
    </div>
  )
}

export default memo(Head);
