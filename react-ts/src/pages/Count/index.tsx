import React, { FC, memo, forwardRef, useImperativeHandle } from 'react';

interface IProps {
  num: number;
  updateNum: () => void;
}

const Count = (props: IProps, ref: any) => {

  useImperativeHandle(ref ,() => {
    return {
      handleAlert
    }
  })  

  function handleAlert() {
    alert('111')
  }

  return (
    <div>
      <span onClick={props.updateNum}> 点我改变{props.num} </span>
    </div>
  )
}

export default forwardRef(Count);
