import styled from '@emotion/styled';
import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header';
import { DataView } from 'pages/DataView';
import { ToDoInput } from 'pages/ToDoInput';
import { useState } from 'react';
import { ToDoListContextProvider } from 'contexts/ToDoList';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  const [toDoList, setToDoList] = useState([
    '리액트 공부하기', 
    '운동하기', 
    '책 읽기'
  ]);

  const onDelete = (todo : string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  }

  return (
    <Container>
      <ToDoListContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<DataView />} />
          <Route path="/add" element={<ToDoInput />} />
          <Route 
            path="*"
            element={
              <NotFound>
                404
                <br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;
