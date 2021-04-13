const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = (event) =>
    window.addEventListener("beforeunload", listener);
  const disablePrevent = (event) =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};
