const rules = {
  email: {
    required: { value: true, message: "Email Address is required." },
    // cek pola / pattern email
    pattern: {
      value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/,
      message: "Must be a valid email address.",
    },
  },
  password: {
    required: { value: true, message: "Password is required." },
    minLength: {
      value: 6,
      message: "Must contain at least 6 characters.",
    },
  },
};

export { rules };
