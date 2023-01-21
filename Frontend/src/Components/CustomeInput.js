import React from 'react';
import { Input } from "antd";

const CustomeInput = (props) => {
    const { type, lable, i_id, i_class } = props;
    return (
      <div>
        <Input type={type} className={`i_class`} id={"i_id"} placeholder={lable} />
        {/* <lable htnlFor={lable}>{lable}</lable> */}
      </div>
    );
}

export default CustomeInput