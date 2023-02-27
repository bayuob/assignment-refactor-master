import * as React from 'react';

import styles from './form.module.css';
import Button from './generic/Button';

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
    <form className={styles.form} onSubmit={(event) => handleSubmit(event)} ref={formRef}>
      <span className={styles.label}>Product title: *</span>

      <input
        ref={titleRef}
        placeholder="Title..."
        defaultValue=""
        className={styles.input}
      />

      <span className={styles.label}>Product details: *</span>

      <input
        ref={priceRef}
        placeholder="Price..."
        defaultValue=""
        className={styles.input}
      />

      <textarea
        ref={descriptionRef}
        placeholder="Start typing product description here..."
        defaultValue=""
        className={styles.textarea}
      />

      <Button>Add a product</Button>
    </form>
  );
};
