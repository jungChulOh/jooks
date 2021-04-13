const useNetwork = (onChange) => {
  const [state, setState] = useState(navigator.onLine);
  useEffect(() => {
    const handleChange = () => {
      if (typeof onChange === "function") onChange(navigator.onLine);
      setState(navigator.onLine);
    };
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, [onChange]);
  return state;
};
