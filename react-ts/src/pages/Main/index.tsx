import React, { FC, memo } from 'react';
import { IList } from 'config/interface';

interface Iprops {
  list: IList[];
  handleDel: (id: number) => void;
}

const Main: FC<Iprops> = ({ handleDel,  list }) => {
  console.log('我的状态没有改变，但是我还是render了')
  return (
    <ul>
      {list.map(v => {
        return (
          <li key={v.id}>
            <span>
              { v.label } 🍄
            </span>
            <button
              style={{ marginLeft: '24px' }}
              onClick={() => handleDel(v.id)}
            >
              吃掉这个蘑菇
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default memo(Main);
