import { useState } from 'react';
import { ToDoInput } from 'components/ToDoInput';
import { ShowInputButton } from 'components/ShowInputButton';

interface Props {
  readonly onAdd: (toDo: string) => void;
}

// export const InputContainer = ( {onAdd} : Props ) => {
export const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    setShowToDoInput(false);
  }

  // const onAddToDo = (toDo: string) => {
  //   onAdd(toDo);
  //   setShowToDoInput(false);
  // }

  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} /> }
        <ShowInputButton 
          show={showToDoInput}
          onClick={() => setShowToDoInput(!showToDoInput)}
        />
    </>
  );
};