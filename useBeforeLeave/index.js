const useBeforeLeave = (onLeave) => {
  const hendle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) onLeave();
  };

  useEffect(() => {
    if (!onLeave && typeof onLeave !== "function") return;
    document.addEventListener("mouseleave", hendle);
    return () => {
      document.removeEventListener("mouseleave", hendle);
    };
  }, [onLeave, hendle]);
};
