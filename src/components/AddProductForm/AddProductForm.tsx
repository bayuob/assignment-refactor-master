import * as React from 'react';

import Button from '../generic/Button';
import Form from '../generic/Form';
import {
  Input,
  Label,
  TextArea,
} from './AddProductForm.styles';

interface Product {
  title: string;
  description: string;
  price: number;
}

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