// pages/Tasks.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, addTask } from '../features/taskSlice';

const Tasks = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.tasks);
  const [newTask, setNewTask] = useState(''); // Local State

  useEffect(() => {
    if (status === 'idle') dispatch(fetchTasks());
  }, [status, dispatch]);

  const handleAdd = () => {
    if (newTask) {
      dispatch(addTask({ id: Date.now(), title: newTask, completed: false }));
      setNewTask('');
    }
  };

  return (
    <>
      <section className="home">
        <h1>Welcome in Info Polri</h1>
        <Link to="/about">Ke About</Link>
      </section>
    </>
  );
};

export default Home;