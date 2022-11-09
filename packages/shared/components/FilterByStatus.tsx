import React, { useState } from "react";
import { Space, Typography, Radio } from "antd";
export const FilterByStatus = ({
  onDataFilter,
}: {
  onDataFilter: (val: string) => void;
}) => {
  const [status, setStatus] = useState("all");
  return (
    <Space direction="vertical" size="small">
      <Typography.Text strong>Filter By:</Typography.Text>
      <Radio.Group
        value={status}
        onChange={(e: any) => {
          setStatus(e?.target?.value);
          onDataFilter(e?.target?.value);
        }}
      >
        <Space direction="vertical" size="large">
          <Radio value="all">All</Radio>
          <Radio value="active">Active</Radio>
          <Radio value="completed">Completed</Radio>
        </Space>
      </Radio.Group>
    </Space>
  );
};
