import * as React from 'react';

import Button from '../generic/Button';
import FormWrapper from '../generic/Form';
import styles from './form.module.css';

interface Product {
  title: string;
  description: string;
  price: number;
}

interface FormProps {
  onSubmit: (payload: Product) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
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
    <FormWrapper onSubmit = {handleSubmit} ref = {formRef}>
      <span className={styles.label}>Product title: *</span>

      <input
        ref={titleRef}
        placeholder="Title..."
        className={styles.input}
      />

      <span className={styles.label}>Product details: *</span>

      <input
        ref={priceRef}
        placeholder="Price..."
        className={styles.input}
      />

      <textarea
        ref={descriptionRef}
        placeholder="Start typing product description here..."
        className={styles.textarea}
      />

      <Button>Add a product</Button>
    </FormWrapper>
  );
};
