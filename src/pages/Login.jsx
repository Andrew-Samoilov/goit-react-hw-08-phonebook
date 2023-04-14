import { useForm } from "react-hook-form";

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(`watch`, watch());
    // console.log(`errors`, errors);

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
