import React from "react";
import styled from "styled-components";
import { Text, Grid } from ".";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value, is_Submit, onSubmit } = props;

  if (multiLine) {
    return (
      <Grid>
        {label ? "" : <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label ? "" : <Text margin="0px">{label}</Text>}
        {is_Submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if(e.key === "Enter"){
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            type={type} 
            placeholder={placeholder} 
            onChange={_onChange} 
          />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요",
  type: "text",
  _onChange: () => {},
  value: "",
  is_Submit: false,
  onSubmit: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border_box;
`;

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border_box;
`;

export default Input;
