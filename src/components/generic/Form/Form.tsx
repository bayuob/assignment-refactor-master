import React from 'react';

import { FormWrapper } from './Form.styles';

interface FormProps {
  onSubmit: (payload: any) => void;
  children: any;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(({ onSubmit, children }, ref) => {
  return (
    <FormWrapper onSubmit = {onSubmit} ref={ref}>
      {children}
    </FormWrapper>
  );
});

export default Form;