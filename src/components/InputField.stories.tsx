import { Meta, StoryObj } from "@storybook/react-webpack5";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This will be your display name",
    variant: "outlined",
    size: "md",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    errorMessage: "Invalid email",
    invalid: true,
    variant: "filled",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    helperText: "At least 8 characters",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "Can't type here",
    disabled: true,
  },
};

// New story for the loading state
export const Loading: Story = {
  args: {
    label: "Loading Data",
    placeholder: "Fetching...",
    loading: true,
  },
};
