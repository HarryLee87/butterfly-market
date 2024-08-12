import FormButton from "@/components/FormBtn";
import FormInput from "@/components/FormInput";
import SocialLogin from "@/components/SocialLogin";

export default function SMSLogin() {

    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Login</h1>
                <h2 className="text-xl">Verify Your Phone Number.</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput
                    type="number"
                    placeholder="Phone Number"
                    required
                    errors={[]} />
                <FormInput
                    type="number"
                    placeholder="Verification Code"
                    required
                    errors={[]} />
                <FormButton
                    loading={false}
                    text="Verify" />
            </form>
        </div>
    );
}