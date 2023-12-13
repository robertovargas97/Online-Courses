import { useForm } from "../hooks/useForm";

export const CustomHookForm = () => {
  const initialForm = {
    username: "",
    email: "",
    password: "",
  };

  const { formState, onInputChange, onResetForm } = useForm(initialForm);

  const { username, email, password } = formState;

  return (
    <>
      <div className="text-center">
        <h1>Custom Hook Form</h1>

        <hr />

        <div className="row">
          <div className="col-sm-6 offset-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </div>

          <div className="col-sm-6 offset-3 mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="test@mail.com"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>

          <div className="col-sm-6 offset-3 mt-2">
            <input
              type="password"
              className="form-control"
              placeholder="Enter a password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
        </div>
        <button onClick={onResetForm} className="btn btn-warning mt-2"> Reset</button>
      </div>
    </>
  );
};
