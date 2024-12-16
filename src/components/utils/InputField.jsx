const InputField = ({ type, id, label, placeholder, register, required, message, min, errors }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>

      <input
        
        type={type}
        id={id}
        className={"border border-gray-400 rounded-md px-2 h-12"}
        placeholder={placeholder}
        {...register(id, { required: { value: required, message }, minLength: min ? { value: min, message: "Minimum 3 characters are required" } : null })}
      />

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-500 mt-0">
          {errors[id]?.message}
        </p>
      )}
    </div>
  );
}
export default InputField;