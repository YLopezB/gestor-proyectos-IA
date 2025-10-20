function Button({ message, handle }) {
  return (
    <button
      onClick={() => handle(true)}
      className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg font-medium transition"
    >
      {message}
    </button>
  );
}

export default Button;
