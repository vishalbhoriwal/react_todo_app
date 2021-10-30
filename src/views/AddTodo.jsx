import React from 'react';
import { useFormik } from 'formik';
import { addTodo } from '../redux/actions/list';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getKey, removeKey } from '../common/utils';

const AddTodo = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      name: '',
    },
    onSubmit: (values) => {
      dispatch(
        addTodo({
          ...values,
          date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
        })
      );
      formik.setValues({
        title: '',
        description: '',
        name: '',
      });
      removeKey();
      return <Redirect to="/" />;
    },
  });

  if (!getKey()) {
    return <Redirect to="/" />;
  }

  return (
    <div className="w-25 d-flex container h-100 flex-column">
      <h2 className="text-center p-3">Add Todo</h2>
      <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-column m-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </div>
        <div className="d-flex flex-column m-2">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div className="d-flex flex-column m-2">
          <label htmlFor="name">User Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <button
          className="m-2 mt-4 shadow border-1 btn btn-success"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        className="m-2 mt-4 shadow border-1 btn btn-danger"
        onClick={removeKey}
      >
        <Link to="/" className="text-white text-decoration-none">
          Cancel
        </Link>
      </button>
    </div>
  );
};

export default AddTodo;
