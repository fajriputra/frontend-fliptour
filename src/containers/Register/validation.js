const rules = {
  name: {
    required: { value: true, message: "Name is required!" },
    minLength: {
      value: 3,
      message: "Name must be between 3 to 32 characters.",
    },
    maxLength: {
      value: 32,
      message: "Name has exceeded 32 characters.",
    },
  },
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
  password_confirmation: {
    required: { value: true, message: "Confirmation Password is required." },
  },
};

export { rules };
