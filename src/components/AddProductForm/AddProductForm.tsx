import React from 'react';

import Product from '../../types/Product';
import {
  Button,
  Form,
} from '../generic';
import {
  Input,
  Label,
  TextArea,
} from './AddProductForm.styles';

interface FormProps {
  onSubmit: (payload: Product) => void;
}

const AddProductForm: React.FC<FormProps> = ({ onSubmit }) => {
  let formRef = React.useRef<HTMLFormElement>(null);
  let titleRef = React.useRef<HTMLInputElement>(null);
  let priceRef = React.useRef<HTMLInputElement>(null);
  let descriptionRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!titleRef.current?.value) {
      alert("Your product needs a title");
      return;
    }

    if (!descriptionRef.current?.value || !priceRef.current?.value) {
      alert("Your product needs some content");
      return;
    }

    onSubmit({
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      price: parseFloat(priceRef.current?.value || '0'),
    });

    formRef.current?.reset();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(e.charCode);

    if (!pattern.test(inputChar)) {
      e.preventDefault();
    }
  };

  return (
    <Form onSubmit = {handleSubmit} ref = {formRef}>
      <Label>Product title: *</Label>

      <Input
        ref={titleRef}
        placeholder="Title..."
      />

      <Label>Product details: *</Label>

      <Input
        ref={priceRef}
        placeholder="Price..."
        type="number"
        min="0"
        step="0.01"
        onKeyPress={handleKeyPress}
      />

      <TextArea
        ref={descriptionRef}
        placeholder="Start typing product description here..."
      />

      <Button>Add a product</Button>
    </Form>
  );
};

export default AddProductForm;