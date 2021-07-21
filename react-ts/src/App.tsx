import React, { useState, useMemo, useEffect, useRef, useReducer } from 'react';
import Head from 'pages/Head';
import Main from 'pages/Main';
import Count from 'pages/Count';
import { IList } from 'config/interface';

const ID_ENUM: number[] = [1, 2, 3, 4, 5];

// const reducer = (state: IList[], [type, val]: [ string, any ]): IList[] => {
//   switch (type) {
//     case 'ADD':
//       return [...state, val]
//       break;
//     case 'DEL':
//       return [...state, val]
//       break;
  
//     default:
//       break;
//   }
//   return [];
// }

const App = () => {
  const [list, setList] = useState<IList[]>([]);
  // const [ list, dispatchList ] = useReducer(reducer, [])
  const [num, setNum] = useState(0);
  const timer = useRef<any>(null);
  const childRef = useRef<{handleAlert: () => void}>();


  useEffect(() => {
    timer.current = setTimeout(() => {
      console.log('11111')
    }, 1000)
    return () => {
      clearTimeout(timer.current);
    }
  }, [num])

  useEffect(() => {
    childRef.current?.handleAlert();
  }, [ childRef.current ])

  function handleAdd() {
    const disAbleID = list.map(v => v.id);
    const useAbleID = ID_ENUM.filter(id => !disAbleID.includes(id));
    setList([
      ...list,
      {
        id: useAbleID[0],
        label: useAbleID[0] + '漂亮的'
      }
    ])
  }

  function handleDel(id: number) {
    setList(list => list.filter(v => v.id !== id))
    // dispatchList()
  }

  const man = useMemo(() => {
    return (
      <Main
      list={list}
      handleDel={handleDel}
    />
    )
  }, [ list ])

  return (
    <div>
      <Count
        num={num}
        updateNum={() => setNum(v => v+ 2)}
        ref={childRef}
      />
      <Head
        handleAdd={handleAdd}
        disabled={list.length > 4}
      />
      { man }
    </div>
  )
}

export default App;  
