import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001be5]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/07b94033-90fd-4e1f-be09-a1ad0a20afe5"
        method="POST"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="">
              Name
            </label>
            <input
              className="border-2 border-gray-300 p-3 flex rounded-lg"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="mt-1 text-red-600">
                {errors.name.type === "required" && "This Field is required"}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="uppercase text-sm py-2" htmlFor="">
              Phone Number
            </label>
            <input
              className="border-2 border-gray-300 p-3 flex rounded-lg"
              type="number"
              {...register("phone", { required: true, minLength: 10 })}
            />
            {errors.name && (
              <p className="mt-1 text-red-600">
                {errors.name.type === "required" && "This Field is required"}
                {errors.name.type === "minLength" && "Max length is 20 char"}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 border-gray-300 p-3 rounded-lg flex"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-600">
              {errors.email.type === "required" && "This Field is required"}
              {errors.email.type === "pattern" &&
                "Please write a correct email address"}
            </p>
          )}
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py=2">Subject</label>
          <input
            className="border-2 border-gray-300 p-3  flex rounded-lg"
            type="text"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <p className="mt-1 text-red-600">
              {errors.subject.type === "required" && "This Field is required"}
            </p>
          )}
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 border-gray-300 p-3 rounded-lg"
            rows={"10"}
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
