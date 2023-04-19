import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { registerAsync } from 'redux/auth/operations';

export default function RegisterPage() {
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        dispatch(registerAsync(data));
    }

    return (
        <main>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", {
                        required: "Name is required"
                    })}
                    label="Name"
                    placeholder="Name"
                />
                <p>{errors.name?.message}</p>
                <input
                    {...register("email", {
                        required: "Email is required"
                    })}
                    label="Email"
                    placeholder="E-mail"
                />
                <p>{errors.email?.message}</p>
                <input
                    {...register("password", {
                        required: "Password is required"
                    })}
                    label="Password"
                    placeholder="Password"
                />
                <p>{errors.password?.message}</p>
                <input type="submit" />
            </form>
        </main>
    );
};
