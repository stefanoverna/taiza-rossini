'use client';

import { z } from 'zod';
import { useZorm } from 'react-zorm';
import Textarea from 'react-textarea-autosize';
import { ErrorGetter, FieldGetter } from 'react-zorm/dist/types';
import { useState } from 'react';

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phoneNumber: z.string(),
  message: z.string().min(1),
});

function Field({
  label,
  field,
  errors,
  placeholder,
  isTextarea,
}: {
  label: string;
  placeholder: string;
  field: FieldGetter;
  errors: ErrorGetter;
  isTextarea?: boolean;
}) {
  return (
    <div className="mb-6">
      <label htmlFor={field()} className="block mb-1 text-sm">
        {label}
      </label>
      <div>
        {isTextarea ? (
          <Textarea
            name={field()}
            placeholder={placeholder}
            minRows={3}
            className={`w-full border rounded resize-none border-stone-300 focus:outline-none p-3 focus:ring-2 focus:ring-accent focus:ring-offset-2 ${errors(
              'border-red-500',
            )}`}
          />
        ) : (
          <input
            type="text"
            name={field()}
            placeholder={placeholder}
            className={`w-full border rounded border-stone-300 focus:outline-none p-3 focus:ring-2 focus:ring-accent focus:ring-offset-2 ${errors(
              'border-red-500',
            )}`}
          />
        )}
      </div>
      {errors((e) => (
        <div className="text-red-700 text-xs mt-1">{e.message}</div>
      ))}
    </div>
  );
}

export function ContactForm() {
  const [success, setSuccess] = useState(false);

  const zo = useZorm('signup', FormSchema, {
    async onValidSubmit(e) {
      e.preventDefault();
      await fetch('https://submit-form.com/1W6wQG7Z', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(e.data),
      });
      zo.form?.reset();
      setSuccess(true);
    },
  });

  return (
    <div className="lg:w-[25vw] lg:min-w-[450px] lg:max-w-[550px]">
      {success && (
        <div className="mb-12 p-8 radius ring-4 ring-highlight">
          <div className="font-bold text-xl mb-3">
            Thank you for reaching out! 🙏
          </div>
          <div>
            I just received the message, and I will reply you as soon as
            possible!
          </div>
        </div>
      )}
      <form ref={zo.ref}>
        <Field
          label="Your name*"
          placeholder="Please insert your name"
          field={zo.fields.name}
          errors={zo.errors.name}
        />
        <Field
          label="Your email*"
          placeholder="Please insert your email"
          field={zo.fields.email}
          errors={zo.errors.email}
        />
        <Field
          label="Your phone number"
          placeholder="Please insert your phone number"
          field={zo.fields.phoneNumber}
          errors={zo.errors.phoneNumber}
        />
        <Field
          label="Your message*"
          placeholder="Hi Taiza! I would like to..."
          field={zo.fields.message}
          errors={zo.errors.message}
          isTextarea={true}
        />

        <button
          disabled={zo.validation?.success === false}
          type="submit"
          className="uppercase tracking-widest block w-full font-bold p-4 border bg-white border-stone-400 rounded-md drop-shadow focus:ring-2 ring-offset-2 ring-accent focus:outline-none"
        >
          Send message
        </button>
      </form>
    </div>
  );
}
