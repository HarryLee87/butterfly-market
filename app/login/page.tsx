import FormButton from "@/components/FormBtn";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";

export default function LogIn() {

    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">Hello!</h1>
                <h2 className="text-xl">Log in with email</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput
                    type="email"
                    placeholder="Email"
                    required
                    errors={[]} />
                <FormInput
                    type="password"
                    placeholder="Password"
                    required
                    errors={[]} />
                <FormButton
                    loading={false}
                    text="Log In" />
            </form>
            <SocialLogin />
        </div>
    );
}