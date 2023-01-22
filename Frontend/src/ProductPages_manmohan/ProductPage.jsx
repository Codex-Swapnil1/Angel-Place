import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprData } from "../Redux/App/action";
import ProductContainer from "./ProductContainer";
import { Center, Select } from "@chakra-ui/react";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";

export default function ProductPage() {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const term = location.state?.query;
  // console.log(location,"term")

  const { data, loading } = useSelector((store) => {
    return { data: store.Appreducer.data, loading: store.Appreducer.isLoading };
  });



  useEffect(() => {
    dispatch(getprData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Center bg={"blackAlpha.800"}>
        <ProductContainer data={data} loading={loading} />
      </Center>
    </>
  );
}
