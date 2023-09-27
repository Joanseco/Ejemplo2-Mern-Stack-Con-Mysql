import { Formik, Form } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function TaskForm() {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={async (values, formik) => {
        console.log(values);
        try {
          const response = await createTaskRequest(values);
          console.log(response);
          formik.resetForm();
        } catch (error) {
          console.error(error);
        }
      }}
    >
      {({ handleChange, handleSubmit, values, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <label>tittle</label>
          <input
            type="text"
            name="title"
            placeholder="Escribe un titulo"
            onChange={handleChange}
            value={values.title}
          />

          <label>description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Escribe una descripcion"
            onChange={handleChange}
            value={values.description}
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
