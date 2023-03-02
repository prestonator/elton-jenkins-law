import React from "react";
import styles from "@/src/Form/styles.module.css";
import { useForm, Controller } from "react-hook-form";
import { useFormData } from "../../context";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  input1: yup.string().required(),
  input2: yup.string().required(),
  input3: yup.string().required(),
});

export default function StepFour({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm({ resolver: yupResolver(schema), mode: "all" });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 3 ? styles.showForm : styles.hideForm}>
      <h2>Step Four</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formRow}>
          <label htmlFor="input1">Input 1</label>
          <input type="text" {...register("input1")} />
          {errors.input1 && (
            <p className={styles.errorText}>Input 1 is required</p>
          )}

          <label htmlFor="input2">Input 2</label>
          <input type="text" {...register("input2")} />
          {errors.input2 && (
            <p className={styles.errorText}>Input 2 is required</p>
          )}

          <label htmlFor="input3">Input 3</label>
          <input type="text" {...register("input3")} />
          {errors.input3 && (
            <p className={styles.errorText}>Input 3 is required</p>
          )}
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
