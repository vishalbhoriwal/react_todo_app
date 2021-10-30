import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeKey, setKey, sort } from '../common/utils';
import { deleteTodo } from '../redux/actions/list';
import { trash } from '../common/icons';

export const TodoList = () => {
  const todo = useSelector((data) => data.list.todo);
  const [isSort, setSort] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteTodo(id));

  const getSortArr = (arr = [], isSort) => {
    if (isSort) {
      return sort(arr, 'name');
    }
    return arr || [];
  };

  useEffect(() => removeKey(), []);

  return (
    <div className="w-100">
      <div className="container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/add" className="text-white text-decoration-none">
            <button className="btn bg-success h-25" onClick={setKey}>
              <span className="text-white">Add Todo</span>
            </button>
          </Link>
          <h2 className="d-flex text-center m-3 text-success fw-bold">Todo</h2>
          <button
            onClick={() => setSort((state) => !state)}
            className="btn bg-transparent text-success fw-bold"
          >
            Sort on Name
          </button>
        </div>
        <div className="d-flex row p-2 bg-secondary text-white">
          <div className="col-1 fw-bold">Id</div>
          <div className="col-2 fw-bold">Title</div>
          <div className="col-2 fw-bold">Description</div>
          <div className="col-2 fw-bold">Name</div>
          <div className="col-3 fw-bold">Creation Date</div>
        </div>
        {getSortArr(todo, isSort).map((data, index) => (
          <div
            key={data.id}
            className={`d-flex row  p-2 ${index % 2 !== 0 ? 'bg-success' : ''}`}
          >
            <div className="col-1">{data.id}</div>
            <div className="col-2">{data.title}</div>
            <div className="col-2">{data.description}</div>
            <div className="col-2">{data.name}</div>
            <div className="col-3">{data.date}</div>
            <button
              onClick={() => handleDelete(data.id)}
              className="btn btn-link btn-sm col-1"
            >
              <img src={trash} className="w-25" alt="delete" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
