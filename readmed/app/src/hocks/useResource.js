import { useContext, useState } from "react";
import { ResourceContext } from "../context/resource";

export const useResource = () => {

  const [types, setTypes] = useState([]);
  const { resources, setResources } = useContext(ResourceContext);

  return {
    types,
    setTypes,
    resources,
    setResources,
  }
}