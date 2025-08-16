const SignUpInput = ({ label, type, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-3 py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#bd78b5] shadow-xl"
    />
  </div>
);

export default SignUpInput;
