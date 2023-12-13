import { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    type OnChangeFunctionType = (event: React.ChangeEvent<HTMLInputElement>) => void;

    const [formState, setFormSate] = useState({
        username: "Roberto",
        email: "roberto@mail.com"
    });
    const { username, email } = formState;

    const onInputChange: OnChangeFunctionType = ({ target }) => {
        const { name, value } = target;
        setFormSate({
            ...formState,
            [name]: value
        });
    }

    useEffect(
        () => {
            // console.log("Useeffect");
        },
        []
    );

    useEffect(
        () => {
            // console.log("Form State change")
        },
        [formState]
    );

    useEffect(
        () => {
            // console.log("Form State Email");
        },
        [email]
    );

    return (
        <>
            <div className="text-center">
                <h1>
                    Simple Form For UseEffect
                </h1>

                <hr />

                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <input type="text"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={onInputChange}
                        />

                    </div>
                    {
                        username === "Roberto2" && <Message />
                    }


                    <div className="col-sm-6 offset-3 mt-2">
                        <input type="text"
                            className="form-control"
                            placeholder="test@mail.com"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </div>
                </div>


            </div>

        </>

    )
}