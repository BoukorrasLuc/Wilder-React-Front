import { useState } from "react";

const LogiqueModale = () => {
  const [reveleWilderNew, changeReveleWilderNew] = useState(false);
  const [reveleWilderUpdate, changeReveleWilderUpdate] = useState(false);

  function toggleWilderNew() {
    changeReveleWilderNew(!reveleWilderNew);
  }
  function toggleWilderUpdate() {
    changeReveleWilderUpdate(!reveleWilderUpdate);
  }

  return {
    reveleWilderNew,
    toggleWilderNew,
    changeReveleWilderNew,
    reveleWilderUpdate,
    toggleWilderUpdate,
    changeReveleWilderUpdate,
  };
};

export default LogiqueModale;
