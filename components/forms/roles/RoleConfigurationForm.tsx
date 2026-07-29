import FormInput from "@/components/common/FormInput";
import FormPasswordInput from "@/components/common/FormPasswordInput";

interface Props {
  register: any;
  errors: any;
}

export default function RoleConfigurationForm({ register, errors }: Props) {
  return (
    <div className="space-y-6 rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
      <h2 className="text-[1.375rem] font-medium text-black">
        Role Configuration
      </h2>

      <div className="space-y-5">
        <FormInput
          label="User Name"
          name="username"
          placeholder="e.g zaid@123"
          register={register}
          error={errors.username}
        />

        <FormInput
          label="Email Address"
          name="email"
          placeholder="example@gmail.com"
          register={register}
          error={errors.email}
        />

        <FormPasswordInput
          label="Password"
          name="password"
          register={register}
          error={errors.password}
        />
      </div>
    </div>
  );
}
