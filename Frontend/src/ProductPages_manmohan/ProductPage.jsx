
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprData } from "../Redux/App/action";
import ProductContainer from "./ProductContainer";
import { Center, Select } from "@chakra-ui/react";

export default function ProductPage() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((store) => {
    return { data: store.Appreducer.data, loading: store.Appreducer.isLoading };
  });
  useEffect(() => {
    dispatch(getprData());
  }, []);

  return (
    <>
      <Center bg={"blackAlpha.800"}>
        <ProductContainer data={data} loading={loading} />
      </Center>
    </>
  );
}
