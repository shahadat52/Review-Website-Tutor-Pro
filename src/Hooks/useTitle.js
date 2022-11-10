import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Tutor Pro`;
  }, [title]);
};

export default useTitle;
