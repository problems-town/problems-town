import { Button, extendVariants, Input } from "@nextui-org/react";
import React from "react";
import { type z } from "zod";

export const MyInput = extendVariants(Input, {
  variants: {
    color: {
      lightPlaceholder: {
        input: ["placeholder:text-default-400"],
      },
    },
  },
  defaultVariants: {
    color: "lightPlaceholder",
  },
});

type MyInputProps = React.ComponentProps<typeof MyInput>;

type AdditionalProps = {
  zodSchema: z.ZodType;
};

export const ZodInput = function ({
  zodSchema,
  ...props
}: MyInputProps & AdditionalProps) {
  const result = zodSchema.safeParse(props.value);
  if (!result.success) {
    return (
      <MyInput
        isInvalid={true}
        errorMessage={result.error.format()._errors}
        {...props}
      />
    );
  }
  return <MyInput {...props} />;
};

const OptionalZodInput = function ({
  zodSchema,
  ...props
}: MyInputProps & { zodSchema?: z.ZodType }) {
  if (zodSchema) {
    return <ZodInput zodSchema={zodSchema} {...props} />;
  }
  return <MyInput {...props} />;
};

export const ArrayInput = function ({
  addText,
  zodSchema,
  values,
  onValuesChange,
  ...props
}: {
  addText?: string;
  values: string[];
  onValuesChange: (values: string[]) => void;
  zodSchema?: z.ZodType;
} & MyInputProps) {
  return (
    <div>
      {values.map((value, index) => {
        return (
          <OptionalZodInput
            key={index}
            value={value}
            zodSchema={zodSchema}
            onValueChange={(newValue) => {
              const newValues = values.map((v, i) => {
                if (i == index) {
                  return newValue;
                }
                return v;
              });
              onValuesChange(newValues);
            }}
            {...props}
            label={index == 0 ? props.label : null}
          />
        );
      })}
      <div className="mt-2 flex justify-end">
        <Button size="sm" onClick={() => onValuesChange([...values, ""])}>
          {addText ?? "新增"}
        </Button>
      </div>
    </div>
  );
};
